import{q as mr,h as gr}from"./index-8fc6a3f4.js";var hr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var f=Object.getOwnPropertyDescriptor(e,t);if(f.value!==o||f.enumerable!==!0)return!1}return!0},Ce=typeof Symbol<"u"&&Symbol,Sr=hr,br=function(){return typeof Ce!="function"||typeof Symbol!="function"||typeof Ce("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Sr()},Ue={foo:{}},Ar=Object,Or=function(){return{__proto__:Ue}.foo===Ue.foo&&!({__proto__:null}instanceof Ar)},wr="Function.prototype.bind called on incompatible ",se=Array.prototype.slice,Pr=Object.prototype.toString,Er="[object Function]",xr=function(e){var t=this;if(typeof t!="function"||Pr.call(t)!==Er)throw new TypeError(wr+t);for(var n=se.call(arguments,1),o,a=function(){if(this instanceof o){var c=t.apply(this,n.concat(se.call(arguments)));return Object(c)===c?c:this}else return t.apply(e,n.concat(se.call(arguments)))},f=Math.max(0,t.length-n.length),i=[],l=0;l<f;l++)i.push("$"+l);if(o=Function("binder","return function ("+i.join(",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var u=function(){};u.prototype=t.prototype,o.prototype=new u,u.prototype=null}return o},$r=xr,Ie=Function.prototype.bind||$r,Fr=Ie,Ir=Fr.call(Function.call,Object.prototype.hasOwnProperty),y,Q=SyntaxError,rr=Function,q=TypeError,ve=function(r){try{return rr('"use strict"; return ('+r+").constructor;")()}catch{}},D=Object.getOwnPropertyDescriptor;if(D)try{D({},"")}catch{D=null}var de=function(){throw new q},Rr=D?function(){try{return arguments.callee,de}catch{try{return D(arguments,"callee").get}catch{return de}}}():de,z=br(),Nr=Or(),h=Object.getPrototypeOf||(Nr?function(r){return r.__proto__}:null),H={},Mr=typeof Uint8Array>"u"||!h?y:h(Uint8Array),C={"%AggregateError%":typeof AggregateError>"u"?y:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?y:ArrayBuffer,"%ArrayIteratorPrototype%":z&&h?h([][Symbol.iterator]()):y,"%AsyncFromSyncIteratorPrototype%":y,"%AsyncFunction%":H,"%AsyncGenerator%":H,"%AsyncGeneratorFunction%":H,"%AsyncIteratorPrototype%":H,"%Atomics%":typeof Atomics>"u"?y:Atomics,"%BigInt%":typeof BigInt>"u"?y:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?y:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?y:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?y:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array>"u"?y:Float32Array,"%Float64Array%":typeof Float64Array>"u"?y:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?y:FinalizationRegistry,"%Function%":rr,"%GeneratorFunction%":H,"%Int8Array%":typeof Int8Array>"u"?y:Int8Array,"%Int16Array%":typeof Int16Array>"u"?y:Int16Array,"%Int32Array%":typeof Int32Array>"u"?y:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":z&&h?h(h([][Symbol.iterator]())):y,"%JSON%":typeof JSON=="object"?JSON:y,"%Map%":typeof Map>"u"?y:Map,"%MapIteratorPrototype%":typeof Map>"u"||!z||!h?y:h(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?y:Promise,"%Proxy%":typeof Proxy>"u"?y:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect>"u"?y:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?y:Set,"%SetIteratorPrototype%":typeof Set>"u"||!z||!h?y:h(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?y:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":z&&h?h(""[Symbol.iterator]()):y,"%Symbol%":z?Symbol:y,"%SyntaxError%":Q,"%ThrowTypeError%":Rr,"%TypedArray%":Mr,"%TypeError%":q,"%Uint8Array%":typeof Uint8Array>"u"?y:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?y:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?y:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?y:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap>"u"?y:WeakMap,"%WeakRef%":typeof WeakRef>"u"?y:WeakRef,"%WeakSet%":typeof WeakSet>"u"?y:WeakSet};if(h)try{null.error}catch(r){var _r=h(h(r));C["%Error.prototype%"]=_r}var Br=function r(e){var t;if(e==="%AsyncFunction%")t=ve("async function () {}");else if(e==="%GeneratorFunction%")t=ve("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=ve("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&h&&(t=h(o.prototype))}return C[e]=t,t},We={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},te=Ie,ue=Ir,Tr=te.call(Function.call,Array.prototype.concat),Dr=te.call(Function.apply,Array.prototype.splice),Le=te.call(Function.call,String.prototype.replace),ce=te.call(Function.call,String.prototype.slice),Cr=te.call(Function.call,RegExp.prototype.exec),Ur=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Wr=/\\(\\)?/g,Lr=function(e){var t=ce(e,0,1),n=ce(e,-1);if(t==="%"&&n!=="%")throw new Q("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new Q("invalid intrinsic syntax, expected opening `%`");var o=[];return Le(e,Ur,function(a,f,i,l){o[o.length]=i?Le(l,Wr,"$1"):f||a}),o},kr=function(e,t){var n=e,o;if(ue(We,n)&&(o=We[n],n="%"+o[0]+"%"),ue(C,n)){var a=C[n];if(a===H&&(a=Br(n)),typeof a>"u"&&!t)throw new q("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new Q("intrinsic "+e+" does not exist!")},Re=function(e,t){if(typeof e!="string"||e.length===0)throw new q("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new q('"allowMissing" argument must be a boolean');if(Cr(/^%?[^%]*%?$/,e)===null)throw new Q("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=Lr(e),o=n.length>0?n[0]:"",a=kr("%"+o+"%",t),f=a.name,i=a.value,l=!1,u=a.alias;u&&(o=u[0],Dr(n,Tr([0,1],u)));for(var c=1,d=!0;c<n.length;c+=1){var p=n[c],m=ce(p,0,1),v=ce(p,-1);if((m==='"'||m==="'"||m==="`"||v==='"'||v==="'"||v==="`")&&m!==v)throw new Q("property names with quotes must have matching quotes");if((p==="constructor"||!d)&&(l=!0),o+="."+p,f="%"+o+"%",ue(C,f))i=C[f];else if(i!=null){if(!(p in i)){if(!t)throw new q("base intrinsic for "+e+" exists, but the property is not available.");return}if(D&&c+1>=n.length){var A=D(i,p);d=!!A,d&&"get"in A&&!("originalValue"in A.get)?i=A.get:i=i[p]}else d=ue(i,p),i=i[p];d&&!l&&(C[f]=i)}}return i},tr={exports:{}};(function(r){var e=Ie,t=Re,n=t("%Function.prototype.apply%"),o=t("%Function.prototype.call%"),a=t("%Reflect.apply%",!0)||e.call(o,n),f=t("%Object.getOwnPropertyDescriptor%",!0),i=t("%Object.defineProperty%",!0),l=t("%Math.max%");if(i)try{i({},"a",{value:1})}catch{i=null}r.exports=function(d){var p=a(e,o,arguments);if(f&&i){var m=f(p,"length");m.configurable&&i(p,"length",{value:1+l(0,d.length-(arguments.length-1))})}return p};var u=function(){return a(e,n,arguments)};i?i(r.exports,"apply",{value:u}):r.exports.apply=u})(tr);var Gr=tr.exports,nr=Re,ar=Gr,zr=ar(nr("String.prototype.indexOf")),Hr=function(e,t){var n=nr(e,!!t);return typeof n=="function"&&zr(e,".prototype.")>-1?ar(n):n};const qr={},Qr=Object.freeze(Object.defineProperty({__proto__:null,default:qr},Symbol.toStringTag,{value:"Module"})),Vr=mr(Qr);var Ne=typeof Map=="function"&&Map.prototype,me=Object.getOwnPropertyDescriptor&&Ne?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,pe=Ne&&me&&typeof me.get=="function"?me.get:null,ke=Ne&&Map.prototype.forEach,Me=typeof Set=="function"&&Set.prototype,ge=Object.getOwnPropertyDescriptor&&Me?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,ye=Me&&ge&&typeof ge.get=="function"?ge.get:null,Ge=Me&&Set.prototype.forEach,Jr=typeof WeakMap=="function"&&WeakMap.prototype,Z=Jr?WeakMap.prototype.has:null,jr=typeof WeakSet=="function"&&WeakSet.prototype,ee=jr?WeakSet.prototype.has:null,Kr=typeof WeakRef=="function"&&WeakRef.prototype,ze=Kr?WeakRef.prototype.deref:null,Yr=Boolean.prototype.valueOf,Xr=Object.prototype.toString,Zr=Function.prototype.toString,et=String.prototype.match,_e=String.prototype.slice,M=String.prototype.replace,rt=String.prototype.toUpperCase,He=String.prototype.toLowerCase,or=RegExp.prototype.test,qe=Array.prototype.concat,P=Array.prototype.join,tt=Array.prototype.slice,Qe=Math.floor,we=typeof BigInt=="function"?BigInt.prototype.valueOf:null,he=Object.getOwnPropertySymbols,Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,V=typeof Symbol=="function"&&typeof Symbol.iterator=="object",b=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===V||"symbol")?Symbol.toStringTag:null,ir=Object.prototype.propertyIsEnumerable,Ve=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function Je(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||or.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-Qe(-r):Qe(r);if(n!==r){var o=String(n),a=_e.call(e,o.length+1);return M.call(o,t,"$&_")+"."+M.call(M.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return M.call(e,t,"$&_")}var Ee=Vr,je=Ee.custom,Ke=lr(je)?je:null,nt=function r(e,t,n,o){var a=t||{};if(N(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(N(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var f=N(a,"customInspect")?a.customInspect:!0;if(typeof f!="boolean"&&f!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(N(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(N(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var i=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return cr(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return i?Je(e,l):l}if(typeof e=="bigint"){var u=String(e)+"n";return i?Je(e,u):u}var c=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=c&&c>0&&typeof e=="object")return xe(e)?"[Array]":"[Object]";var d=At(a,n);if(typeof o>"u")o=[];else if(ur(o,e)>=0)return"[Circular]";function p($,k,ae){if(k&&(o=tt.call(o),o.push(k)),ae){var G={depth:a.depth};return N(a,"quoteStyle")&&(G.quoteStyle=a.quoteStyle),r($,G,n+1,o)}return r($,a,n+1,o)}if(typeof e=="function"&&!Ye(e)){var m=yt(e),v=oe(e,p);return"[Function"+(m?": "+m:" (anonymous)")+"]"+(v.length>0?" { "+P.call(v,", ")+" }":"")}if(lr(e)){var A=V?M.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Pe.call(e);return typeof e=="object"&&!V?X(A):A}if(ht(e)){for(var E="<"+He.call(String(e.nodeName)),s=e.attributes||[],x=0;x<s.length;x++)E+=" "+s[x].name+"="+fr(at(s[x].value),"double",a);return E+=">",e.childNodes&&e.childNodes.length&&(E+="..."),E+="</"+He.call(String(e.nodeName))+">",E}if(xe(e)){if(e.length===0)return"[]";var I=oe(e,p);return d&&!bt(I)?"["+$e(I,d)+"]":"[ "+P.call(I,", ")+" ]"}if(it(e)){var U=oe(e,p);return!("cause"in Error.prototype)&&"cause"in e&&!ir.call(e,"cause")?"{ ["+String(e)+"] "+P.call(qe.call("[cause]: "+p(e.cause),U),", ")+" }":U.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+P.call(U,", ")+" }"}if(typeof e=="object"&&f){if(Ke&&typeof e[Ke]=="function"&&Ee)return Ee(e,{depth:c-n});if(f!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(st(e)){var K=[];return ke&&ke.call(e,function($,k){K.push(p(k,e,!0)+" => "+p($,e))}),Xe("Map",pe.call(e),K,d)}if(mt(e)){var ne=[];return Ge&&Ge.call(e,function($){ne.push(p($,e))}),Xe("Set",ye.call(e),ne,d)}if(vt(e))return Se("WeakMap");if(gt(e))return Se("WeakSet");if(dt(e))return Se("WeakRef");if(lt(e))return X(p(Number(e)));if(ct(e))return X(p(we.call(e)));if(ut(e))return X(Yr.call(e));if(ft(e))return X(p(String(e)));if(!ot(e)&&!Ye(e)){var B=oe(e,p),R=Ve?Ve(e)===Object.prototype:e instanceof Object||e.constructor===Object,W=e instanceof Object?"":"null prototype",L=!R&&b&&Object(e)===e&&b in e?_e.call(_(e),8,-1):W?"Object":"",Y=R||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",O=Y+(L||W?"["+P.call(qe.call([],L||[],W||[]),": ")+"] ":"");return B.length===0?O+"{}":d?O+"{"+$e(B,d)+"}":O+"{ "+P.call(B,", ")+" }"}return String(e)};function fr(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function at(r){return M.call(String(r),/"/g,"&quot;")}function xe(r){return _(r)==="[object Array]"&&(!b||!(typeof r=="object"&&b in r))}function ot(r){return _(r)==="[object Date]"&&(!b||!(typeof r=="object"&&b in r))}function Ye(r){return _(r)==="[object RegExp]"&&(!b||!(typeof r=="object"&&b in r))}function it(r){return _(r)==="[object Error]"&&(!b||!(typeof r=="object"&&b in r))}function ft(r){return _(r)==="[object String]"&&(!b||!(typeof r=="object"&&b in r))}function lt(r){return _(r)==="[object Number]"&&(!b||!(typeof r=="object"&&b in r))}function ut(r){return _(r)==="[object Boolean]"&&(!b||!(typeof r=="object"&&b in r))}function lr(r){if(V)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!Pe)return!1;try{return Pe.call(r),!0}catch{}return!1}function ct(r){if(!r||typeof r!="object"||!we)return!1;try{return we.call(r),!0}catch{}return!1}var pt=Object.prototype.hasOwnProperty||function(r){return r in this};function N(r,e){return pt.call(r,e)}function _(r){return Xr.call(r)}function yt(r){if(r.name)return r.name;var e=et.call(Zr.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function ur(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function st(r){if(!pe||!r||typeof r!="object")return!1;try{pe.call(r);try{ye.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function vt(r){if(!Z||!r||typeof r!="object")return!1;try{Z.call(r,Z);try{ee.call(r,ee)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function dt(r){if(!ze||!r||typeof r!="object")return!1;try{return ze.call(r),!0}catch{}return!1}function mt(r){if(!ye||!r||typeof r!="object")return!1;try{ye.call(r);try{pe.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function gt(r){if(!ee||!r||typeof r!="object")return!1;try{ee.call(r,ee);try{Z.call(r,Z)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function ht(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function cr(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return cr(_e.call(r,0,e.maxStringLength),e)+n}var o=M.call(M.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,St);return fr(o,"single",e)}function St(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+rt.call(e.toString(16))}function X(r){return"Object("+r+")"}function Se(r){return r+" { ? }"}function Xe(r,e,t,n){var o=n?$e(t,n):P.call(t,", ");return r+" ("+e+") {"+o+"}"}function bt(r){for(var e=0;e<r.length;e++)if(ur(r[e],`
`)>=0)return!1;return!0}function At(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=P.call(Array(r.indent+1)," ");else return null;return{base:t,prev:P.call(Array(e+1),t)}}function $e(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+P.call(r,","+t)+`
`+e.prev}function oe(r,e){var t=xe(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=N(r,o)?e(r[o],r):""}var a=typeof he=="function"?he(r):[],f;if(V){f={};for(var i=0;i<a.length;i++)f["$"+a[i]]=a[i]}for(var l in r)N(r,l)&&(t&&String(Number(l))===l&&l<r.length||V&&f["$"+l]instanceof Symbol||(or.call(/[^\w$]/,l)?n.push(e(l,r)+": "+e(r[l],r)):n.push(l+": "+e(r[l],r))));if(typeof he=="function")for(var u=0;u<a.length;u++)ir.call(r,a[u])&&n.push("["+e(a[u])+"]: "+e(r[a[u]],r));return n}var Be=Re,j=Hr,Ot=nt,wt=Be("%TypeError%"),ie=Be("%WeakMap%",!0),fe=Be("%Map%",!0),Pt=j("WeakMap.prototype.get",!0),Et=j("WeakMap.prototype.set",!0),xt=j("WeakMap.prototype.has",!0),$t=j("Map.prototype.get",!0),Ft=j("Map.prototype.set",!0),It=j("Map.prototype.has",!0),Te=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},Rt=function(r,e){var t=Te(r,e);return t&&t.value},Nt=function(r,e,t){var n=Te(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},Mt=function(r,e){return!!Te(r,e)},_t=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new wt("Side channel does not contain "+Ot(a))},get:function(a){if(ie&&a&&(typeof a=="object"||typeof a=="function")){if(e)return Pt(e,a)}else if(fe){if(t)return $t(t,a)}else if(n)return Rt(n,a)},has:function(a){if(ie&&a&&(typeof a=="object"||typeof a=="function")){if(e)return xt(e,a)}else if(fe){if(t)return It(t,a)}else if(n)return Mt(n,a);return!1},set:function(a,f){ie&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new ie),Et(e,a,f)):fe?(t||(t=new fe),Ft(t,a,f)):(n||(n={key:{},next:null}),Nt(n,a,f))}};return o},Bt=String.prototype.replace,Tt=/%20/g,be={RFC1738:"RFC1738",RFC3986:"RFC3986"},De={default:be.RFC3986,formatters:{RFC1738:function(r){return Bt.call(r,Tt,"+")},RFC3986:function(r){return String(r)}},RFC1738:be.RFC1738,RFC3986:be.RFC3986},Dt=De,Ae=Object.prototype.hasOwnProperty,T=Array.isArray,w=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),Ct=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(T(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]<"u"&&o.push(n[a]);t.obj[t.prop]=o}}},pr=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]<"u"&&(n[o]=e[o]);return n},Ut=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(T(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!Ae.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return T(e)&&!T(t)&&(o=pr(e,n)),T(e)&&T(t)?(t.forEach(function(a,f){if(Ae.call(e,f)){var i=e[f];i&&typeof i=="object"&&a&&typeof a=="object"?e[f]=r(i,a,n):e.push(a)}else e[f]=a}),e):Object.keys(t).reduce(function(a,f){var i=t[f];return Ae.call(a,f)?a[f]=r(a[f],i,n):a[f]=i,a},o)},Wt=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},Lt=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},kt=function(e,t,n,o,a){if(e.length===0)return e;var f=e;if(typeof e=="symbol"?f=Symbol.prototype.toString.call(e):typeof e!="string"&&(f=String(e)),n==="iso-8859-1")return escape(f).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var i="",l=0;l<f.length;++l){var u=f.charCodeAt(l);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||a===Dt.RFC1738&&(u===40||u===41)){i+=f.charAt(l);continue}if(u<128){i=i+w[u];continue}if(u<2048){i=i+(w[192|u>>6]+w[128|u&63]);continue}if(u<55296||u>=57344){i=i+(w[224|u>>12]+w[128|u>>6&63]+w[128|u&63]);continue}l+=1,u=65536+((u&1023)<<10|f.charCodeAt(l)&1023),i+=w[240|u>>18]+w[128|u>>12&63]+w[128|u>>6&63]+w[128|u&63]}return i},Gt=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],f=a.obj[a.prop],i=Object.keys(f),l=0;l<i.length;++l){var u=i[l],c=f[u];typeof c=="object"&&c!==null&&n.indexOf(c)===-1&&(t.push({obj:f,prop:u}),n.push(c))}return Ct(t),e},zt=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Ht=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},qt=function(e,t){return[].concat(e,t)},Qt=function(e,t){if(T(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},yr={arrayToObject:pr,assign:Wt,combine:qt,compact:Gt,decode:Lt,encode:kt,isBuffer:Ht,isRegExp:zt,maybeMap:Qt,merge:Ut},sr=_t,le=yr,re=De,Vt=Object.prototype.hasOwnProperty,Ze={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},F=Array.isArray,Jt=Array.prototype.push,vr=function(r,e){Jt.apply(r,F(e)?e:[e])},jt=Date.prototype.toISOString,er=re.default,S={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:le.encode,encodeValuesOnly:!1,format:er,formatter:re.formatters[er],indices:!1,serializeDate:function(e){return jt.call(e)},skipNulls:!1,strictNullHandling:!1},Kt=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Oe={},Yt=function r(e,t,n,o,a,f,i,l,u,c,d,p,m,v,A,E){for(var s=e,x=E,I=0,U=!1;(x=x.get(Oe))!==void 0&&!U;){var K=x.get(e);if(I+=1,typeof K<"u"){if(K===I)throw new RangeError("Cyclic object value");U=!0}typeof x.get(Oe)>"u"&&(I=0)}if(typeof l=="function"?s=l(t,s):s instanceof Date?s=d(s):n==="comma"&&F(s)&&(s=le.maybeMap(s,function(G){return G instanceof Date?d(G):G})),s===null){if(a)return i&&!v?i(t,S.encoder,A,"key",p):t;s=""}if(Kt(s)||le.isBuffer(s)){if(i){var ne=v?t:i(t,S.encoder,A,"key",p);return[m(ne)+"="+m(i(s,S.encoder,A,"value",p))]}return[m(t)+"="+m(String(s))]}var B=[];if(typeof s>"u")return B;var R;if(n==="comma"&&F(s))v&&i&&(s=le.maybeMap(s,i)),R=[{value:s.length>0?s.join(",")||null:void 0}];else if(F(l))R=l;else{var W=Object.keys(s);R=u?W.sort(u):W}for(var L=o&&F(s)&&s.length===1?t+"[]":t,Y=0;Y<R.length;++Y){var O=R[Y],$=typeof O=="object"&&typeof O.value<"u"?O.value:s[O];if(!(f&&$===null)){var k=F(s)?typeof n=="function"?n(L,O):L:L+(c?"."+O:"["+O+"]");E.set(e,I);var ae=sr();ae.set(Oe,E),vr(B,r($,k,n,o,a,f,n==="comma"&&v&&F(s)?null:i,l,u,c,d,p,m,v,A,ae))}}return B},Xt=function(e){if(!e)return S;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||S.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=re.default;if(typeof e.format<"u"){if(!Vt.call(re.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=re.formatters[n],a=S.filter;return(typeof e.filter=="function"||F(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:S.addQueryPrefix,allowDots:typeof e.allowDots>"u"?S.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:S.charsetSentinel,delimiter:typeof e.delimiter>"u"?S.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:S.encode,encoder:typeof e.encoder=="function"?e.encoder:S.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:S.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:S.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:S.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:S.strictNullHandling}},Zt=function(r,e){var t=r,n=Xt(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):F(n.filter)&&(a=n.filter,o=a);var f=[];if(typeof t!="object"||t===null)return"";var i;e&&e.arrayFormat in Ze?i=e.arrayFormat:e&&"indices"in e?i=e.indices?"indices":"repeat":i="indices";var l=Ze[i];if(e&&"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var u=l==="comma"&&e&&e.commaRoundTrip;o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var c=sr(),d=0;d<o.length;++d){var p=o[d];n.skipNulls&&t[p]===null||vr(f,Yt(t[p],p,l,u,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,c))}var m=f.join(n.delimiter),v=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),m.length>0?v+m:""},J=yr,Fe=Object.prototype.hasOwnProperty,en=Array.isArray,g={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:J.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},rn=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},dr=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},tn="utf8=%26%2310003%3B",nn="utf8=%E2%9C%93",an=function(e,t){var n={__proto__:null},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,f=o.split(t.delimiter,a),i=-1,l,u=t.charset;if(t.charsetSentinel)for(l=0;l<f.length;++l)f[l].indexOf("utf8=")===0&&(f[l]===nn?u="utf-8":f[l]===tn&&(u="iso-8859-1"),i=l,l=f.length);for(l=0;l<f.length;++l)if(l!==i){var c=f[l],d=c.indexOf("]="),p=d===-1?c.indexOf("="):d+1,m,v;p===-1?(m=t.decoder(c,g.decoder,u,"key"),v=t.strictNullHandling?null:""):(m=t.decoder(c.slice(0,p),g.decoder,u,"key"),v=J.maybeMap(dr(c.slice(p+1),t),function(A){return t.decoder(A,g.decoder,u,"value")})),v&&t.interpretNumericEntities&&u==="iso-8859-1"&&(v=rn(v)),c.indexOf("[]=")>-1&&(v=en(v)?[v]:v),Fe.call(n,m)?n[m]=J.combine(n[m],v):n[m]=v}return n},on=function(r,e,t,n){for(var o=n?e:dr(e,t),a=r.length-1;a>=0;--a){var f,i=r[a];if(i==="[]"&&t.parseArrays)f=[].concat(o);else{f=t.plainObjects?Object.create(null):{};var l=i.charAt(0)==="["&&i.charAt(i.length-1)==="]"?i.slice(1,-1):i,u=parseInt(l,10);!t.parseArrays&&l===""?f={0:o}:!isNaN(u)&&i!==l&&String(u)===l&&u>=0&&t.parseArrays&&u<=t.arrayLimit?(f=[],f[u]=o):l!=="__proto__"&&(f[l]=o)}o=f}return o},fn=function(e,t,n,o){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,f=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=n.depth>0&&f.exec(a),u=l?a.slice(0,l.index):a,c=[];if(u){if(!n.plainObjects&&Fe.call(Object.prototype,u)&&!n.allowPrototypes)return;c.push(u)}for(var d=0;n.depth>0&&(l=i.exec(a))!==null&&d<n.depth;){if(d+=1,!n.plainObjects&&Fe.call(Object.prototype,l[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(l[1])}return l&&c.push("["+a.slice(l.index)+"]"),on(c,t,n,o)}},ln=function(e){if(!e)return g;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?g.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?g.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:g.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:g.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:g.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:g.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:g.comma,decoder:typeof e.decoder=="function"?e.decoder:g.decoder,delimiter:typeof e.delimiter=="string"||J.isRegExp(e.delimiter)?e.delimiter:g.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:g.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:g.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:g.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:g.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:g.strictNullHandling}},un=function(r,e){var t=ln(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?an(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),f=0;f<a.length;++f){var i=a[f],l=fn(i,n[i],t,typeof r=="string");o=J.merge(o,l,t)}return t.allowSparse===!0?o:J.compact(o)},cn=Zt,pn=un,yn=De,sn={formats:yn,parse:pn,stringify:cn};const dn=gr(sn);export{dn as q};
