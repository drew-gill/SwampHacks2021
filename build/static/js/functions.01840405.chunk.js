/*! For license information please see functions.01840405.chunk.js.LICENSE.txt */
(this.webpackJsonpswamphacks2021=this.webpackJsonpswamphacks2021||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var r=n(8),i=n(0),o=n(7),s={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},a=function(e){function t(n,r,i){var o=e.call(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o.code=n,o.details=i,o}return Object(i.c)(t,e),t}(Error);var u=function(){function e(e,t){var n=this;this.auth=null,this.messaging=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then((function(e){return n.auth=e}),(function(){})),this.messaging||t.get().then((function(e){return n.messaging=e}),(function(){}))}return e.prototype.getAuthToken=function(){return Object(i.b)(this,void 0,void 0,(function(){var e;return Object(i.d)(this,(function(t){switch(t.label){case 0:if(!this.auth)return[2,void 0];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.auth.getToken()];case 2:return(e=t.sent())?[2,e.accessToken]:[2,void 0];case 3:return t.sent(),[2,void 0];case 4:return[2]}}))}))},e.prototype.getInstanceIdToken=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(e){if(!this.messaging||!("Notification"in self)||"granted"!==Notification.permission)return[2,void 0];try{return[2,this.messaging.getToken()]}catch(t){return[2,void 0]}return[2]}))}))},e.prototype.getContext=function(){return Object(i.b)(this,void 0,void 0,(function(){var e,t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return[4,this.getAuthToken()];case 1:return e=n.sent(),[4,this.getInstanceIdToken()];case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}}))}))},e}();function c(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var l=function(){function e(){}return e.prototype.encode=function(e){var t=this;if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"===typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map((function(e){return t.encode(e)}));if("function"===typeof e||"object"===typeof e)return c(e,(function(e){return t.encode(e)}));throw new Error("Data cannot be encoded in JSON: "+e)},e.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(e.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map((function(e){return t.decode(e)})):"function"===typeof e||"object"===typeof e?c(e,(function(e){return t.decode(e)})):e},e}();var d=function(){function e(e,t,n,r,i){var o=this;void 0===r&&(r="us-central1"),this.app_=e,this.fetchImpl=i,this.serializer=new l,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return Promise.resolve(o.deleteService())}},this.contextProvider=new u(t,n),this.cancelAllRequests=new Promise((function(e){o.deleteService=function(){return e()}}));try{var s=new URL(r);this.customDomain=s.origin,this.region="us-central1"}catch(a){this.customDomain=null,this.region=r}}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),e.prototype._url=function(e){var t=this.app_.options.projectId;return null!==this.emulatorOrigin?this.emulatorOrigin+"/"+t+"/"+this.region+"/"+e:null!==this.customDomain?this.customDomain+"/"+e:"https://"+this.region+"-"+t+".cloudfunctions.net/"+e},e.prototype.useEmulator=function(e,t){this.emulatorOrigin="http://"+e+":"+t},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e,t){var n=this;return function(r){return n.call(e,r,t||{})}},e.prototype.postJSON=function(e,t,n){return Object(i.b)(this,void 0,void 0,(function(){var r,o;return Object(i.d)(this,(function(i){switch(i.label){case 0:n["Content-Type"]="application/json",i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.fetchImpl(e,{method:"POST",body:JSON.stringify(t),headers:n})];case 2:return r=i.sent(),[3,4];case 3:return i.sent(),[2,{status:0,json:null}];case 4:o=null,i.label=5;case 5:return i.trys.push([5,7,,8]),[4,r.json()];case 6:return o=i.sent(),[3,8];case 7:return i.sent(),[3,8];case 8:return[2,{status:r.status,json:o}]}}))}))},e.prototype.call=function(e,t,n){return Object(i.b)(this,void 0,void 0,(function(){var r,o,u,c,l,d,h,p,m,g,v;return Object(i.d)(this,(function(i){switch(i.label){case 0:return r=this._url(e),t=this.serializer.encode(t),o={data:t},u={},[4,this.contextProvider.getContext()];case 1:return(c=i.sent()).authToken&&(u.Authorization="Bearer "+c.authToken),c.instanceIdToken&&(u["Firebase-Instance-ID-Token"]=c.instanceIdToken),l=n.timeout||7e4,d=function(e){var t,n=new Promise((function(n,r){t=setTimeout((function(){r(new a("deadline-exceeded","deadline-exceeded"))}),e)}));return{timer:t,promise:n}}(l),h=d.timer,p=d.promise,[4,Promise.race([f(h,this.postJSON(r,o,u)),p,f(h,this.cancelAllRequests)])];case 2:if(!(m=i.sent()))throw new a("cancelled","Firebase Functions instance was deleted.");if(g=function(e,t,n){var r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),i=r,o=void 0;try{var u=t&&t.error;if(u){var c=u.status;if("string"===typeof c){if(!s[c])return new a("internal","internal");r=s[c],i=c}var l=u.message;"string"===typeof l&&(i=l),void 0!==(o=u.details)&&(o=n.decode(o))}}catch(d){}return"ok"===r?null:new a(r,i,o)}(m.status,m.json,this.serializer))throw g;if(!m.json)throw new a("internal","Response is not valid JSON object.");if("undefined"===typeof(v=m.json.data)&&(v=m.json.result),"undefined"===typeof v)throw new a("internal","Response is missing data field.");return[2,{data:this.serializer.decode(v)}]}}))}))},e}();function f(e,t){return Object(i.b)(this,void 0,void 0,(function(){var n;return Object(i.d)(this,(function(r){switch(r.label){case 0:return[4,t];case 1:return n=r.sent(),clearTimeout(e),[2,n]}}))}))}!function(e,t){var n={Functions:d};e.INTERNAL.registerComponent(new o.a("functions",(function(e,n){var r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),o=e.getProvider("messaging");return new d(r,i,o,n,t)}),"PUBLIC").setServiceProps(n).setMultipleInstances(!0))}(r.a,fetch.bind(self)),r.a.registerVersion("@firebase/functions","0.6.1")}}]);
//# sourceMappingURL=functions.01840405.chunk.js.map