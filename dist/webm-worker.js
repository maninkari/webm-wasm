var e,n,t=(e="undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("webm-worker.js",document.baseURI).href,function(n){n=void 0!==(n=n||{})?n:{};var t,r,i,o,a,u={};for(t in n)n.hasOwnProperty(t)&&(u[t]=n[t]);r="object"==typeof window,i="function"==typeof importScripts,o="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&!r&&!i,a=!r&&!o&&!i;var s,l,c,f,p="";o?(p=__dirname+"/",s=function(e,n){var t;return c||(c=require("fs")),f||(f=require("path")),e=f.normalize(e),t=c.readFileSync(e),n?t:t.toString()},l=function(e){var n=s(e,!0);return n.buffer||(n=new Uint8Array(n)),b(n.buffer),n},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(e){if(!(e instanceof tt))throw e}),process.on("unhandledRejection",B),n.inspect=function(){return"[Emscripten Module object]"}):a?("undefined"!=typeof read&&(s=function(e){return read(e)}),l=function(e){var n;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(b("object"==typeof(n=read(e,"binary"))),n)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(r||i)&&(i?p=self.location.href:document.currentScript&&(p=document.currentScript.src),e&&(p=e),p=0!==p.indexOf("blob:")?p.substr(0,p.lastIndexOf("/")+1):"",s=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.send(null),n.responseText},i&&(l=function(e){var n=new XMLHttpRequest;return n.open("GET",e,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}));var d=n.print||console.log.bind(console),y=n.printErr||console.warn.bind(console);for(t in u)u.hasOwnProperty(t)&&(n[t]=u[t]);u=null;var h,m,_={"f64-rem":function(e,n){return e%n},debugger:function(){}},v=(new Array(0),0);n.wasmBinary&&(h=n.wasmBinary),"object"!=typeof WebAssembly&&y("no native wasm support detected");var g=new WebAssembly.Table({initial:16192,maximum:16192,element:"anyfunc"}),w=!1;function b(e,n){e||B("Assertion failed: "+n)}var C,T,P,$,A,S,k,F,E,j="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function R(e,n,t){for(var r=n+t,i=n;e[i]&&!(i>=r);)++i;if(i-n>16&&e.subarray&&j)return j.decode(e.subarray(n,i));for(var o="";n<i;){var a=e[n++];if(128&a){var u=63&e[n++];if(192!=(224&a)){var s=63&e[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&e[n++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function O(e,n){return e?R(P,e,n):""}function W(e,n){return e%n>0&&(e+=n-e%n),e}function I(e){C=e,n.HEAP8=T=new Int8Array(e),n.HEAP16=$=new Int16Array(e),n.HEAP32=S=new Int32Array(e),n.HEAPU8=P=new Uint8Array(e),n.HEAPU16=A=new Uint16Array(e),n.HEAPU32=k=new Uint32Array(e),n.HEAPF32=F=new Float32Array(e),n.HEAPF64=E=new Float64Array(e)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var x=n.TOTAL_MEMORY||16777216;function D(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?n.dynCall_v(r):n.dynCall_vi(r,t.arg):r(void 0===t.arg?null:t.arg)}else t()}}(m=n.wasmMemory?n.wasmMemory:new WebAssembly.Memory({initial:x/65536}))&&(C=m.buffer),x=C.byteLength,I(C),S[21772]=5330176;var U=[],N=[],L=[],M=[],H=0,z=null;function B(e){throw n.onAbort&&n.onAbort(e),d(e+=""),y(e),w=!0,"abort("+e+"). Build with -s ASSERTIONS=1 for more info."}function V(e){return String.prototype.startsWith?e.startsWith("data:application/octet-stream;base64,"):0===e.indexOf("data:application/octet-stream;base64,")}n.preloadedImages={},n.preloadedAudios={};var q,G="webm-wasm.wasm";function Z(){try{if(h)return new Uint8Array(h);if(l)return l(G);throw"both async and sync fetching of the wasm failed"}catch(e){B(e)}}function Y(e){return e.replace(/\b__Z[\w\d_]+/g,function(e){return e==e?e:e+" ["+e+"]"})}function X(){var e=new Error;if(!e.stack){try{throw new Error(0)}catch(n){e=n}if(!e.stack)return"(no stack trace available)"}return e.stack.toString()}V(G)||(q=G,G=n.locateFile?n.locateFile(q,p):p+q),n.asm=function(){var e={env:Wn,wasi_unstable:Wn,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:_};function t(e,t){n.asm=e.exports,function(e){if(H--,n.monitorRunDependencies&&n.monitorRunDependencies(H),0==H&&z){var t=z;z=null,t()}}()}function o(e){t(e.instance)}function a(n){return(h||!r&&!i||"function"!=typeof fetch?new Promise(function(e,n){e(Z())}):fetch(G,{credentials:"same-origin"}).then(function(e){if(!e.ok)throw"failed to load wasm binary file at '"+G+"'";return e.arrayBuffer()}).catch(function(){return Z()})).then(function(n){return WebAssembly.instantiate(n,e)}).then(n,function(e){y("failed to asynchronously prepare wasm: "+e),B(e)})}if(H++,n.monitorRunDependencies&&n.monitorRunDependencies(H),n.instantiateWasm)try{return n.instantiateWasm(e,t)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}return function(){if(h||"function"!=typeof WebAssembly.instantiateStreaming||V(G)||"function"!=typeof fetch)return a(o);fetch(G,{credentials:"same-origin"}).then(function(n){return WebAssembly.instantiateStreaming(n,e).then(o,function(e){y("wasm streaming compile failed: "+e),y("falling back to ArrayBuffer instantiation"),a(o)})})}(),{}},N.push({func:function(){Hn()}});var J={};function K(e){e&&J[e].refcount++}function Q(e){if(!e||J[e])return e;for(var n in J)for(var t=+n,r=J[t].adjusted,i=r.length,o=0;o<i;o++)if(r[o]===e)return t;return e}var ee={buffers:[null,[],[]],printChar:function(e,n){var t=ee.buffers[e];0===n||10===n?((1===e?d:y)(R(t,0)),t.length=0):t.push(n)},varargs:0,get:function(e){return ee.varargs+=4,S[ee.varargs-4>>2]},getStr:function(){return O(ee.get())},get64:function(){var e=ee.get();return ee.get(),e},getZero:function(){ee.get()}};function ne(e){try{return 0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||B(e),e.errno}}function te(e,n,t,r){try{var i=ee.getStreamFromFD(e),o=ee.doReadv(i,n,t);return S[r>>2]=o,0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||B(e),e.errno}}function re(e,n,t,r,i){try{return 0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||B(e),e.errno}}function ie(e,n,t,r){try{for(var i=0,o=0;o<t;o++){for(var a=S[n+8*o>>2],u=S[n+(8*o+4)>>2],s=0;s<u;s++)ee.printChar(e,P[a+s]);i+=u}return S[r>>2]=i,0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||B(e),e.errno}}function oe(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}function ae(){for(var e=new Array(256),n=0;n<256;++n)e[n]=String.fromCharCode(n);ue=e}var ue=void 0;function se(e){for(var n="",t=e;P[t];)n+=ue[P[t++]];return n}var le={},ce={},fe={};function pe(e){if(void 0===e)return"_unknown";var n=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=48&&n<=57?"_"+e:e}function de(e,n){return e=pe(e),new Function("body","return function "+e+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(n)}function ye(e,n){var t=de(n,function(e){this.name=n,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var he=void 0;function me(e){throw new he(e)}var _e=void 0;function ve(e){throw new _e(e)}function ge(e,n,t){function r(n){var r=t(n);r.length!==e.length&&ve("Mismatched type converter count");for(var i=0;i<e.length;++i)we(e[i],r[i])}e.forEach(function(e){fe[e]=n});var i=new Array(n.length),o=[],a=0;n.forEach(function(e,n){ce.hasOwnProperty(e)?i[n]=ce[e]:(o.push(e),le.hasOwnProperty(e)||(le[e]=[]),le[e].push(function(){i[n]=ce[e],++a===o.length&&r(i)}))}),0===o.length&&r(i)}function we(e,n,t){if(t=t||{},!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=n.name;if(e||me('type "'+r+'" must have a positive integer typeid pointer'),ce.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;me("Cannot register type '"+r+"' twice")}if(ce[e]=n,delete fe[e],le.hasOwnProperty(e)){var i=le[e];delete le[e],i.forEach(function(e){e()})}}function be(e){if(!(this instanceof De))return!1;if(!(e instanceof De))return!1;for(var n=this.$$.ptrType.registeredClass,t=this.$$.ptr,r=e.$$.ptrType.registeredClass,i=e.$$.ptr;n.baseClass;)t=n.upcast(t),n=n.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return n===r&&t===i}function Ce(e){return{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType}}function Te(e){me(e.$$.ptrType.registeredClass.name+" instance already deleted")}var Pe=!1;function $e(e){}function Ae(e){e.smartPtr?e.smartPtrType.rawDestructor(e.smartPtr):e.ptrType.registeredClass.rawDestructor(e.ptr)}function Se(e){e.count.value-=1,0===e.count.value&&Ae(e)}function ke(e){return"undefined"==typeof FinalizationGroup?(ke=function(e){return e},e):(Pe=new FinalizationGroup(function(e){for(var n=e.next();!n.done;n=e.next()){var t=n.value;t.ptr?Se(t):console.warn("object already deleted: "+t.ptr)}}),$e=function(e){Pe.unregister(e.$$)},(ke=function(e){return Pe.register(e,e.$$,e.$$),e})(e))}function Fe(){if(this.$$.ptr||Te(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e=ke(Object.create(Object.getPrototypeOf(this),{$$:{value:Ce(this.$$)}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e}function Ee(){this.$$.ptr||Te(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&me("Object already scheduled for deletion"),$e(this),Se(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function je(){return!this.$$.ptr}var Re=void 0,Oe=[];function We(){for(;Oe.length;){var e=Oe.pop();e.$$.deleteScheduled=!1,e.delete()}}function Ie(){return this.$$.ptr||Te(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&me("Object already scheduled for deletion"),Oe.push(this),1===Oe.length&&Re&&Re(We),this.$$.deleteScheduled=!0,this}function xe(){De.prototype.isAliasOf=be,De.prototype.clone=Fe,De.prototype.delete=Ee,De.prototype.isDeleted=je,De.prototype.deleteLater=Ie}function De(){}var Ue={};function Ne(e,n,t){if(void 0===e[n].overloadTable){var r=e[n];e[n]=function(){return e[n].overloadTable.hasOwnProperty(arguments.length)||me("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[n].overloadTable+")!"),e[n].overloadTable[arguments.length].apply(this,arguments)},e[n].overloadTable=[],e[n].overloadTable[r.argCount]=r}}function Le(e,t,r){n.hasOwnProperty(e)?((void 0===r||void 0!==n[e].overloadTable&&void 0!==n[e].overloadTable[r])&&me("Cannot register public name '"+e+"' twice"),Ne(n,e,e),n.hasOwnProperty(r)&&me("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),n[e].overloadTable[r]=t):(n[e]=t,void 0!==r&&(n[e].numArguments=r))}function Me(e,n,t,r,i,o,a,u){this.name=e,this.constructor=n,this.instancePrototype=t,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function He(e,n,t){for(;n!==t;)n.upcast||me("Expected null or instance of "+t.name+", got an instance of "+n.name),e=n.upcast(e),n=n.baseClass;return e}function ze(e,n){return null===n?(this.isReference&&me("null is not a valid "+this.name),0):(n.$$||me('Cannot pass "'+$n(n)+'" as a '+this.name),n.$$.ptr||me("Cannot pass deleted object as a pointer of type "+this.name),He(n.$$.ptr,n.$$.ptrType.registeredClass,this.registeredClass))}function Be(e,n){var t;if(null===n)return this.isReference&&me("null is not a valid "+this.name),this.isSmartPointer?(t=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,t),t):0;if(n.$$||me('Cannot pass "'+$n(n)+'" as a '+this.name),n.$$.ptr||me("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&n.$$.ptrType.isConst&&me("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name),t=He(n.$$.ptr,n.$$.ptrType.registeredClass,this.registeredClass),this.isSmartPointer)switch(void 0===n.$$.smartPtr&&me("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:n.$$.smartPtrType===this?t=n.$$.smartPtr:me("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:t=n.$$.smartPtr;break;case 2:if(n.$$.smartPtrType===this)t=n.$$.smartPtr;else{var r=n.clone();t=this.rawShare(t,Pn(function(){r.delete()})),null!==e&&e.push(this.rawDestructor,t)}break;default:me("Unsupporting sharing policy")}return t}function Ve(e,n){return null===n?(this.isReference&&me("null is not a valid "+this.name),0):(n.$$||me('Cannot pass "'+$n(n)+'" as a '+this.name),n.$$.ptr||me("Cannot pass deleted object as a pointer of type "+this.name),n.$$.ptrType.isConst&&me("Cannot convert argument of type "+n.$$.ptrType.name+" to parameter type "+this.name),He(n.$$.ptr,n.$$.ptrType.registeredClass,this.registeredClass))}function qe(e){return this.fromWireType(k[e>>2])}function Ge(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function Ze(e){this.rawDestructor&&this.rawDestructor(e)}function Ye(e){null!==e&&e.delete()}function Xe(e,n,t){if(n===t)return e;if(void 0===t.baseClass)return null;var r=Xe(e,n,t.baseClass);return null===r?null:t.downcast(r)}function Je(){return Object.keys(nn).length}function Ke(){var e=[];for(var n in nn)nn.hasOwnProperty(n)&&e.push(nn[n]);return e}function Qe(e){Re=e,Oe.length&&Re&&Re(We)}function en(){n.getInheritedInstanceCount=Je,n.getLiveInheritedInstances=Ke,n.flushPendingDeletes=We,n.setDelayFunction=Qe}var nn={};function tn(e,n){for(void 0===n&&me("ptr should not be undefined");e.baseClass;)n=e.upcast(n),e=e.baseClass;return n}function rn(e,n){return n=tn(e,n),nn[n]}function on(e,n){return n.ptrType&&n.ptr||ve("makeClassHandle requires ptr and ptrType"),!!n.smartPtrType!=!!n.smartPtr&&ve("Both smartPtrType and smartPtr must be specified"),n.count={value:1},ke(Object.create(e,{$$:{value:n}}))}function an(e){var n=this.getPointee(e);if(!n)return this.destructor(e),null;var t=rn(this.registeredClass,n);if(void 0!==t){if(0===t.$$.count.value)return t.$$.ptr=n,t.$$.smartPtr=e,t.clone();var r=t.clone();return this.destructor(e),r}function i(){return on(this.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:this.pointeeType,ptr:n,smartPtrType:this,smartPtr:e}:{ptrType:this,ptr:e})}var o,a=this.registeredClass.getActualType(n),u=Ue[a];if(!u)return i.call(this);var s=Xe(n,this.registeredClass,(o=this.isConst?u.constPointerType:u.pointerType).registeredClass);return null===s?i.call(this):on(o.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:o,ptr:s,smartPtrType:this,smartPtr:e}:{ptrType:o,ptr:s})}function un(){sn.prototype.getPointee=Ge,sn.prototype.destructor=Ze,sn.prototype.argPackAdvance=8,sn.prototype.readValueFromPointer=qe,sn.prototype.deleteObject=Ye,sn.prototype.fromWireType=an}function sn(e,n,t,r,i,o,a,u,s,l,c){this.name=e,this.registeredClass=n,this.isReference=t,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==n.baseClass?this.toWireType=Be:r?(this.toWireType=ze,this.destructorFunction=null):(this.toWireType=Ve,this.destructorFunction=null)}function ln(e,t,r){n.hasOwnProperty(e)||ve("Replacing nonexistant public symbol"),void 0!==n[e].overloadTable&&void 0!==r?n[e].overloadTable[r]=t:(n[e]=t,n[e].argCount=r)}function cn(e,t){var r;if(e=se(e),void 0!==n["FUNCTION_TABLE_"+e])r=n["FUNCTION_TABLE_"+e][t];else if("undefined"!=typeof FUNCTION_TABLE)r=FUNCTION_TABLE[t];else{var i=n["dynCall_"+e];void 0===i&&void 0===(i=n["dynCall_"+e.replace(/f/g,"d")])&&me("No dynCall invoker for signature: "+e),r=function(n){for(var r=[],i=1;i<e.length;++i)r.push("a"+i);var o="return function dynCall_"+e+"_"+t+"("+r.join(", ")+") {\n";return o+="    return dynCall(rawFunction"+(r.length?", ":"")+r.join(", ")+");\n",o+="};\n",new Function("dynCall","rawFunction",o)(n,t)}(i)}return"function"!=typeof r&&me("unknown function pointer with signature "+e+": "+t),r}var fn=void 0;function pn(e){var n=Un(e),t=se(n);return Nn(n),t}function dn(e,n){var t=[],r={};throw n.forEach(function e(n){r[n]||ce[n]||(fe[n]?fe[n].forEach(e):(t.push(n),r[n]=!0))}),new fn(e+": "+t.map(pn).join([", "]))}function yn(e,n){for(var t=[],r=0;r<e;r++)t.push(S[(n>>2)+r]);return t}function hn(e){for(;e.length;){var n=e.pop();e.pop()(n)}}function mn(e,n){if(!(e instanceof Function))throw new TypeError("new_ called with constructor type "+typeof e+" which is not a function");var t=de(e.name||"unknownFunctionName",function(){});t.prototype=e.prototype;var r=new t,i=e.apply(r,n);return i instanceof Object?i:r}function _n(e,n,t,r,i){var o=n.length;o<2&&me("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==n[1]&&null!==t,u=!1,s=1;s<n.length;++s)if(null!==n[s]&&void 0===n[s].destructorFunction){u=!0;break}var l="void"!==n[0].name,c="",f="";for(s=0;s<o-2;++s)c+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+pe(e)+"("+c+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+e+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",y=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[me,r,i,hn,n[0],n[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+n[s+2].name+"\n",y.push("argType"+s),h.push(n[s+2]);if(a&&(f="thisWired"+(f.length>0?", ":"")+f),p+=(l?"var rv = ":"")+"invoker(fn"+(f.length>0?", ":"")+f+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<n.length;++s){var m=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==n[s].destructorFunction&&(p+=m+"_dtor("+m+"); // "+n[s].name+"\n",y.push(m+"_dtor"),h.push(n[s].destructorFunction))}return l&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),y.push(p+="}\n"),mn(Function,y).apply(null,h)}var vn=[],gn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function wn(e){e>4&&0==--gn[e].refcount&&(gn[e]=void 0,vn.push(e))}function bn(){for(var e=0,n=5;n<gn.length;++n)void 0!==gn[n]&&++e;return e}function Cn(){for(var e=5;e<gn.length;++e)if(void 0!==gn[e])return gn[e];return null}function Tn(){n.count_emval_handles=bn,n.get_first_emval=Cn}function Pn(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=vn.length?vn.pop():gn.length;return gn[n]={refcount:1,value:e},n}}function $n(e){if(null===e)return"null";var n=typeof e;return"object"===n||"array"===n||"function"===n?e.toString():""+e}function An(e,n){switch(n){case 2:return function(e){return this.fromWireType(F[e>>2])};case 3:return function(e){return this.fromWireType(E[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function Sn(e,n,t){switch(n){case 0:return t?function(e){return T[e]}:function(e){return P[e]};case 1:return t?function(e){return $[e>>1]}:function(e){return A[e>>1]};case 2:return t?function(e){return S[e>>2]}:function(e){return k[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function kn(e,n){var t=ce[e];return void 0===t&&me(n+" has unknown type "+pn(e)),t}function Fn(e,n,t){for(var r=new Array(e),i=0;i<e;++i)r[i]=kn(S[(n>>2)+i],"parameter "+i);return r}function En(e){return e||me("Cannot use deleted val. handle = "+e),gn[e].value}function jn(){return T.length}function Rn(e){try{return m.grow(e-C.byteLength+65535>>16),I(m.buffer),1}catch(e){}}function On(e){return Math.log(e)/Math.LN10}ae(),he=n.BindingError=ye(Error,"BindingError"),_e=n.InternalError=ye(Error,"InternalError"),xe(),un(),en(),fn=n.UnboundTypeError=ye(Error,"UnboundTypeError"),Tn();var Wn={ClassHandle:De,ClassHandle_clone:Fe,ClassHandle_delete:Ee,ClassHandle_deleteLater:Ie,ClassHandle_isAliasOf:be,ClassHandle_isDeleted:je,RegisteredClass:Me,RegisteredPointer:sn,RegisteredPointer_deleteObject:Ye,RegisteredPointer_destructor:Ze,RegisteredPointer_fromWireType:an,RegisteredPointer_getPointee:Ge,___cxa_allocate_exception:function(e){return Ln(e)},___cxa_begin_catch:function(e){var n=J[e];return n&&!n.caught&&(n.caught=!0,Dn.uncaught_exceptions--),n&&(n.rethrown=!1),K(Q(e)),e},___cxa_throw:function(e,n,t){throw J[e]={ptr:e,adjusted:[e],type:n,destructor:t,refcount:0,caught:!1,rethrown:!1},"uncaught_exception"in Dn?Dn.uncaught_exceptions++:Dn.uncaught_exceptions=1,e},___exception_addRef:K,___exception_deAdjust:Q,___gxx_personality_v0:function(){},___lock:function(){},___setErrNo:function(e){return n.___errno_location&&(S[n.___errno_location()>>2]=e),e},___syscall221:function(e,n){ee.varargs=n;try{return 0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||B(e),-e.errno}},___syscall5:function(e,n){ee.varargs=n;try{var t=ee.getStr(),r=ee.get(),i=ee.get();return FS.open(t,r,i).fd}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||B(e),-e.errno}},___syscall54:function(e,n){ee.varargs=n;try{return 0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||B(e),-e.errno}},___unlock:function(){},___wasi_fd_close:function(){return ne.apply(null,arguments)},___wasi_fd_read:function(){return te.apply(null,arguments)},___wasi_fd_seek:function(){return re.apply(null,arguments)},___wasi_fd_write:function(){return ie.apply(null,arguments)},__embind_register_bool:function(e,n,t,r,i){var o=oe(t);we(e,{name:n=se(n),fromWireType:function(e){return!!e},toWireType:function(e,n){return n?r:i},argPackAdvance:8,readValueFromPointer:function(e){var r;if(1===t)r=T;else if(2===t)r=$;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+n);r=S}return this.fromWireType(r[e>>o])},destructorFunction:null})},__embind_register_class:function(e,n,t,r,i,o,a,u,s,l,c,f,p){c=se(c),o=cn(i,o),u&&(u=cn(a,u)),l&&(l=cn(s,l)),p=cn(f,p);var d=pe(c);Le(d,function(){dn("Cannot construct "+c+" due to unbound types",[r])}),ge([e,n,t],r?[r]:[],function(n){var t,i;n=n[0],i=r?(t=n.registeredClass).instancePrototype:De.prototype;var a=de(d,function(){if(Object.getPrototypeOf(this)!==s)throw new he("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new he(c+" has no accessible constructor");var e=f.constructor_body[arguments.length];if(void 0===e)throw new he("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return e.apply(this,arguments)}),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Me(c,a,s,p,t,o,u,l),y=new sn(c,f,!0,!1,!1),h=new sn(c+"*",f,!1,!1,!1),m=new sn(c+" const*",f,!1,!0,!1);return Ue[e]={pointerType:h,constPointerType:m},ln(d,a),[y,h,m]})},__embind_register_class_constructor:function(e,n,t,r,i,o){var a=yn(n,t);i=cn(r,i),ge([],[e],function(e){var t="constructor "+(e=e[0]).name;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[n-1])throw new he("Cannot register multiple constructors with identical number of parameters ("+(n-1)+") for class '"+e.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return e.registeredClass.constructor_body[n-1]=function(){dn("Cannot construct "+e.name+" due to unbound types",a)},ge([],a,function(r){return e.registeredClass.constructor_body[n-1]=function(){arguments.length!==n-1&&me(t+" called with "+arguments.length+" arguments, expected "+(n-1));var e=[],a=new Array(n);a[0]=o;for(var u=1;u<n;++u)a[u]=r[u].toWireType(e,arguments[u-1]);var s=i.apply(null,a);return hn(e),r[0].fromWireType(s)},[]}),[]})},__embind_register_class_function:function(e,n,t,r,i,o,a,u){var s=yn(t,r);n=se(n),o=cn(i,o),ge([],[e],function(e){var r=(e=e[0]).name+"."+n;function i(){dn("Cannot call "+r+" due to unbound types",s)}u&&e.registeredClass.pureVirtualFunctions.push(n);var l=e.registeredClass.instancePrototype,c=l[n];return void 0===c||void 0===c.overloadTable&&c.className!==e.name&&c.argCount===t-2?(i.argCount=t-2,i.className=e.name,l[n]=i):(Ne(l,n,r),l[n].overloadTable[t-2]=i),ge([],s,function(i){var u=_n(r,i,e,o,a);return void 0===l[n].overloadTable?(u.argCount=t-2,l[n]=u):l[n].overloadTable[t-2]=u,[]}),[]})},__embind_register_emval:function(e,n){we(e,{name:n=se(n),fromWireType:function(e){var n=gn[e].value;return wn(e),n},toWireType:function(e,n){return Pn(n)},argPackAdvance:8,readValueFromPointer:qe,destructorFunction:null})},__embind_register_float:function(e,n,t){var r=oe(t);we(e,{name:n=se(n),fromWireType:function(e){return e},toWireType:function(e,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+$n(n)+'" to '+this.name);return n},argPackAdvance:8,readValueFromPointer:An(n,r),destructorFunction:null})},__embind_register_integer:function(e,n,t,r,i){n=se(n),-1===i&&(i=4294967295);var o=oe(t),a=function(e){return e};if(0===r){var u=32-8*t;a=function(e){return e<<u>>>u}}var s=-1!=n.indexOf("unsigned");we(e,{name:n,fromWireType:a,toWireType:function(e,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+$n(t)+'" to '+this.name);if(t<r||t>i)throw new TypeError('Passing a number "'+$n(t)+'" from JS side to C/C++ side to an argument of type "'+n+'", which is outside the valid range ['+r+", "+i+"]!");return s?t>>>0:0|t},argPackAdvance:8,readValueFromPointer:Sn(n,o,0!==r),destructorFunction:null})},__embind_register_memory_view:function(e,n,t){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function i(e){return new r(k.buffer,k[1+(e>>=2)],k[e])}we(e,{name:t=se(t),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},__embind_register_std_string:function(e,n){var t="std::string"===(n=se(n));we(e,{name:n,fromWireType:function(e){var n,r=k[e>>2];if(t){var i=P[e+4+r],o=0;0!=i&&(o=i,P[e+4+r]=0);for(var a=e+4,u=0;u<=r;++u){var s=e+4+u;if(0==P[s]){var l=O(a);void 0===n?n=l:(n+=String.fromCharCode(0),n+=l),a=s+1}}0!=o&&(P[e+4+r]=o)}else{var c=new Array(r);for(u=0;u<r;++u)c[u]=String.fromCharCode(P[e+4+u]);n=c.join("")}return Nn(e),n},toWireType:function(e,n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var r="string"==typeof n;r||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array||me("Cannot pass non-string to std::string");var i=(t&&r?function(){return function(e){for(var n=0,t=0;t<e.length;++t){var r=e.charCodeAt(t);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++t)),r<=127?++n:n+=r<=2047?2:r<=65535?3:4}return n}(n)}:function(){return n.length})(),o=Ln(4+i+1);if(k[o>>2]=i,t&&r)!function(e,n,t,r){if(!(r>0))return 0;for(var i=t+r-1,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),a<=127){if(t>=i)break;n[t++]=a}else if(a<=2047){if(t+1>=i)break;n[t++]=192|a>>6,n[t++]=128|63&a}else if(a<=65535){if(t+2>=i)break;n[t++]=224|a>>12,n[t++]=128|a>>6&63,n[t++]=128|63&a}else{if(t+3>=i)break;n[t++]=240|a>>18,n[t++]=128|a>>12&63,n[t++]=128|a>>6&63,n[t++]=128|63&a}}n[t]=0}(n,P,o+4,i+1);else if(r)for(var a=0;a<i;++a){var u=n.charCodeAt(a);u>255&&(Nn(o),me("String has UTF-16 code units that do not fit in 8 bits")),P[o+4+a]=u}else for(a=0;a<i;++a)P[o+4+a]=n[a];return null!==e&&e.push(Nn,o),o},argPackAdvance:8,readValueFromPointer:qe,destructorFunction:function(e){Nn(e)}})},__embind_register_std_wstring:function(e,n,t){var r,i;t=se(t),2===n?(r=function(){return A},i=1):4===n&&(r=function(){return k},i=2),we(e,{name:t,fromWireType:function(e){for(var n=r(),t=k[e>>2],o=new Array(t),a=e+4>>i,u=0;u<t;++u)o[u]=String.fromCharCode(n[a+u]);return Nn(e),o.join("")},toWireType:function(e,t){var o=t.length,a=Ln(4+o*n),u=r();k[a>>2]=o;for(var s=a+4>>i,l=0;l<o;++l)u[s+l]=t.charCodeAt(l);return null!==e&&e.push(Nn,a),a},argPackAdvance:8,readValueFromPointer:qe,destructorFunction:function(e){Nn(e)}})},__embind_register_void:function(e,n){we(e,{isVoid:!0,name:n=se(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,n){}})},__emval_call:function(e,n,t,r){e=En(e);for(var i=Fn(n,t),o=new Array(n),a=0;a<n;++a){var u=i[a];o[a]=u.readValueFromPointer(r),r+=u.argPackAdvance}return Pn(e.apply(void 0,o))},__emval_decref:wn,__emval_incref:function(e){e>4&&(gn[e].refcount+=1)},__emval_lookupTypes:Fn,__emval_register:Pn,__emval_take_value:function(e,n){return Pn((e=kn(e,"_emval_take_value")).readValueFromPointer(n))},__memory_base:1024,__table_base:0,_abort:function(){B()},_embind_repr:$n,_emscripten_get_heap_size:jn,_emscripten_memcpy_big:function(e,n,t){P.set(P.subarray(n,n+t),e)},_emscripten_resize_heap:function(e){var n=jn();if(e>2147418112)return!1;for(var t=Math.max(n,16777216);t<e;)t=t<=536870912?W(2*t,65536):Math.min(W((3*t+2147483648)/4,65536),2147418112);return!!Rn(t)},_fd_close:ne,_fd_read:te,_fd_seek:re,_fd_write:ie,_gettimeofday:function(e){var n=Date.now();return S[e>>2]=n/1e3|0,S[e+4>>2]=n%1e3*1e3|0,0},_llvm_log10_f32:On,_llvm_log10_f64:function(e){return On(e)},_llvm_trap:function(){B("trap!")},_longjmp:function(e,n){throw Mn(e,n||1),"longjmp"},_pthread_cond_destroy:function(){return 0},_pthread_cond_init:function(){return 0},_pthread_create:function(){return 6},_pthread_join:function(){},_time:function(e){var n=Date.now()/1e3|0;return e&&(S[e>>2]=n),n},abort:B,abortOnCannotGrowMemory:function(e){B("OOM")},attachFinalizer:ke,constNoSmartPtrRawPointerToWireType:ze,count_emval_handles:bn,craftInvokerFunction:_n,createNamedFunction:de,demangle:function(e){return e},demangleAll:Y,detachFinalizer:$e,downcastPointer:Xe,embind__requireFunction:cn,embind_init_charCodes:ae,emscripten_realloc_buffer:Rn,ensureOverloadTable:Ne,exposePublicSymbol:Le,extendError:ye,floatReadValueFromPointer:An,flushPendingDeletes:We,flush_NO_FILESYSTEM:function(){var e=n._fflush;e&&e(0);var t=ee.buffers;t[1].length&&ee.printChar(1,10),t[2].length&&ee.printChar(2,10)},genericPointerToWireType:Be,getBasestPointer:tn,getInheritedInstance:rn,getInheritedInstanceCount:Je,getLiveInheritedInstances:Ke,getShiftFromSize:oe,getTempRet0:function(){return v},getTypeName:pn,get_first_emval:Cn,heap32VectorToArray:yn,init_ClassHandle:xe,init_RegisteredPointer:un,init_embind:en,init_emval:Tn,integerReadValueFromPointer:Sn,invoke_dd:function(e,n){var t=Bn();try{return Vn(e,n)}catch(e){if(zn(t),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_i:function(e){var n=Bn();try{return qn(e)}catch(e){if(zn(n),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_ii:function(e,n){var t=Bn();try{return Gn(e,n)}catch(e){if(zn(t),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_iii:function(e,n,t){var r=Bn();try{return Zn(e,n,t)}catch(e){if(zn(r),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_iiiiiiiii:function(e,n,t,r,i,o,a,u,s){var l=Bn();try{return Yn(e,n,t,r,i,o,a,u,s)}catch(e){if(zn(l),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_iiiijj:function(e,n,t,r,i,o,a,u){var s=Bn();try{return Xn(e,n,t,r,i,o,a,u)}catch(e){if(zn(s),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_vi:function(e,n){var t=Bn();try{Jn(e,n)}catch(e){if(zn(t),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_vii:function(e,n,t){var r=Bn();try{Kn(e,n,t)}catch(e){if(zn(r),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_viii:function(e,n,t,r){var i=Bn();try{Qn(e,n,t,r)}catch(e){if(zn(i),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_viiii:function(e,n,t,r,i){var o=Bn();try{et(e,n,t,r,i)}catch(e){if(zn(o),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},invoke_viiiii:function(e,n,t,r,i,o){var a=Bn();try{nt(e,n,t,r,i,o)}catch(e){if(zn(a),e!==e+0&&"longjmp"!==e)throw e;Mn(1,0)}},jsStackTrace:X,makeClassHandle:on,makeLegalFunctionName:pe,memory:m,new_:mn,nonConstNoSmartPtrRawPointerToWireType:Ve,readLatin1String:se,registerType:we,releaseClassHandle:Se,replacePublicSymbol:ln,requireHandle:En,requireRegisteredType:kn,runDestructor:Ae,runDestructors:hn,setDelayFunction:Qe,setTempRet0:function(e){v=e},shallowCopyInternalPointer:Ce,simpleReadValueFromPointer:qe,stackTrace:function(){var e=X();return n.extraStackTrace&&(e+="\n"+n.extraStackTrace()),Y(e)},table:g,tempDoublePtr:87280,throwBindingError:me,throwInstanceAlreadyDeleted:Te,throwInternalError:ve,throwUnboundTypeError:dn,upcastPointer:He,whenDependentTypesAreResolved:ge},In=n.asm({},Wn,C);n.asm=In;var xn,Dn=n.__ZSt18uncaught_exceptionv=function(){return n.asm.__ZSt18uncaught_exceptionv.apply(null,arguments)},Un=(n.___cxa_can_catch=function(){return n.asm.___cxa_can_catch.apply(null,arguments)},n.___cxa_is_pointer_type=function(){return n.asm.___cxa_is_pointer_type.apply(null,arguments)},n.___embind_register_native_and_builtin_types=function(){return n.asm.___embind_register_native_and_builtin_types.apply(null,arguments)},n.___getTypeName=function(){return n.asm.___getTypeName.apply(null,arguments)}),Nn=(n._emscripten_get_sbrk_ptr=function(){return n.asm._emscripten_get_sbrk_ptr.apply(null,arguments)},n._emscripten_replace_memory=function(){return n.asm._emscripten_replace_memory.apply(null,arguments)},n._free=function(){return n.asm._free.apply(null,arguments)}),Ln=(n._llvm_round_f64=function(){return n.asm._llvm_round_f64.apply(null,arguments)},n._malloc=function(){return n.asm._malloc.apply(null,arguments)}),Mn=(n._memcpy=function(){return n.asm._memcpy.apply(null,arguments)},n._memmove=function(){return n.asm._memmove.apply(null,arguments)},n._memset=function(){return n.asm._memset.apply(null,arguments)},n._realloc=function(){return n.asm._realloc.apply(null,arguments)},n._saveSetjmp=function(){return n.asm._saveSetjmp.apply(null,arguments)},n._setThrew=function(){return n.asm._setThrew.apply(null,arguments)}),Hn=(n._testSetjmp=function(){return n.asm._testSetjmp.apply(null,arguments)},n.establishStackSpace=function(){return n.asm.establishStackSpace.apply(null,arguments)},n.globalCtors=function(){return n.asm.globalCtors.apply(null,arguments)}),zn=(n.stackAlloc=function(){return n.asm.stackAlloc.apply(null,arguments)},n.stackRestore=function(){return n.asm.stackRestore.apply(null,arguments)}),Bn=n.stackSave=function(){return n.asm.stackSave.apply(null,arguments)},Vn=n.dynCall_dd=function(){return n.asm.dynCall_dd.apply(null,arguments)},qn=n.dynCall_i=function(){return n.asm.dynCall_i.apply(null,arguments)},Gn=n.dynCall_ii=function(){return n.asm.dynCall_ii.apply(null,arguments)},Zn=(n.dynCall_iidiiii=function(){return n.asm.dynCall_iidiiii.apply(null,arguments)},n.dynCall_iii=function(){return n.asm.dynCall_iii.apply(null,arguments)}),Yn=(n.dynCall_iiii=function(){return n.asm.dynCall_iiii.apply(null,arguments)},n.dynCall_iiiii=function(){return n.asm.dynCall_iiiii.apply(null,arguments)},n.dynCall_iiiiii=function(){return n.asm.dynCall_iiiiii.apply(null,arguments)},n.dynCall_iiiiiiii=function(){return n.asm.dynCall_iiiiiiii.apply(null,arguments)},n.dynCall_iiiiiiiii=function(){return n.asm.dynCall_iiiiiiiii.apply(null,arguments)}),Xn=(n.dynCall_iiiiiiiiii=function(){return n.asm.dynCall_iiiiiiiiii.apply(null,arguments)},n.dynCall_iiiiiiiiiii=function(){return n.asm.dynCall_iiiiiiiiiii.apply(null,arguments)},n.dynCall_iiiiiiiiiiii=function(){return n.asm.dynCall_iiiiiiiiiiii.apply(null,arguments)},n.dynCall_iiiiiiiiiiiiiiiiii=function(){return n.asm.dynCall_iiiiiiiiiiiiiiiiii.apply(null,arguments)},n.dynCall_iiiijj=function(){return n.asm.dynCall_iiiijj.apply(null,arguments)}),Jn=(n.dynCall_iiijiii=function(){return n.asm.dynCall_iiijiii.apply(null,arguments)},n.dynCall_iij=function(){return n.asm.dynCall_iij.apply(null,arguments)},n.dynCall_ji=function(){return n.asm.dynCall_ji.apply(null,arguments)},n.dynCall_jiji=function(){return n.asm.dynCall_jiji.apply(null,arguments)},n.dynCall_v=function(){return n.asm.dynCall_v.apply(null,arguments)},n.dynCall_vi=function(){return n.asm.dynCall_vi.apply(null,arguments)}),Kn=n.dynCall_vii=function(){return n.asm.dynCall_vii.apply(null,arguments)},Qn=n.dynCall_viii=function(){return n.asm.dynCall_viii.apply(null,arguments)},et=n.dynCall_viiii=function(){return n.asm.dynCall_viiii.apply(null,arguments)},nt=n.dynCall_viiiii=function(){return n.asm.dynCall_viiiii.apply(null,arguments)};function tt(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function rt(e){function t(){xn||(xn=!0,w||(D(N),D(L),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)e=n.postRun.shift(),M.unshift(e);var e;D(M)}()))}H>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)e=n.preRun.shift(),U.unshift(e);var e;D(U)}(),H>0||(n.setStatus?(n.setStatus("Running..."),setTimeout(function(){setTimeout(function(){n.setStatus("")},1),t()},1)):t()))}if(n.dynCall_viiiiii=function(){return n.asm.dynCall_viiiiii.apply(null,arguments)},n.dynCall_viiiiiii=function(){return n.asm.dynCall_viiiiiii.apply(null,arguments)},n.dynCall_viiiiiiiiiii=function(){return n.asm.dynCall_viiiiiiiiiii.apply(null,arguments)},n.dynCall_vijj=function(){return n.asm.dynCall_vijj.apply(null,arguments)},n.asm=In,n.then=function(e){if(xn)e(n);else{var t=n.onRuntimeInitialized;n.onRuntimeInitialized=function(){t&&t(),e(n)}}return n},z=function e(){xn||rt(),xn||(z=e)},n.run=rt,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return rt(),n}),r={width:300,height:150,timebaseNum:1,timebaseDen:30,bitrate:200,realtime:!1,lossless:1,speed:9};try{var i=require("worker_threads");n=i.parentPort}catch(e){n=self}function o(e){return new Promise(function(n){return"once"in e?e.once("message",n):e.addEventListener("message",function(e){return n(e.data)},{once:!0})})}!function(){try{Promise.resolve(o(n)).then(function(e){return Promise.resolve((i=t,a=e,new Promise(function(e){var n=i({noInitialRun:!0,locateFile:function(e){return e.endsWith(".wasm")?a:e},onRuntimeInitialized:function(){delete n.then,e(n)}})}))).then(function(e){return n.postMessage("READY"),Promise.resolve(o(n)).then(function(t){var i=Object.assign({},r,t);"kLive"in i||(i.kLive=i.realtime);var o=new e.WebmEncoder(i.timebaseNum,i.timebaseDen,i.width,i.height,i.bitrate,i.realtime,i.kLive,i.lossless,i.speed,function(e){var t=new Uint8Array(e);n.postMessage(t.buffer,[t.buffer])});!function(e,n){if("on"in e)return e.on("message",n);e.addEventListener("message",function(e){return n(e.data)})}(n,function(e){if(!e)return o.finalize(),n.postMessage(null),void o.delete();o.addRGBAFrame(e)})})});var i,a})}catch(e){return Promise.reject(e)}}();
//# sourceMappingURL=webm-worker.js.map
