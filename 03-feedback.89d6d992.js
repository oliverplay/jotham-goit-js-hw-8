!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(O,t),s?p(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=g();if(S(e))return w(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?b(n,u-(e-c)):n}(e))}function w(e){return f=void 0,v&&i?p(e):(i=o=void 0,a)}function T(){var e=g(),n=S(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=h(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?a:w(g())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};var j=document.querySelector(".feedback-form"),S=j.querySelector("input"),O=j.querySelector("textarea"),w=JSON.parse(localStorage.getItem("feedback-form-state"));function T(){var e={email:S.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}S.addEventListener("input",e(t)((function(){T()}),500)),O.addEventListener("input",e(t)((function(){T()}),500)),w&&(S.value=w.email,O.value=w.message),j.addEventListener("submit",(function(e){if(e.preventDefault(),[S,O].filter((function(e){return!e.value.trim()})).length>0)alert("Please fill all fields before submitting the form.");else{var t={email:S.value,message:O.value};console.log(t),e.target.reset(),localStorage.removeItem("feedback-form-state")}}))}();
//# sourceMappingURL=03-feedback.89d6d992.js.map
