parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t="https://mate-academy.github.io/phone-catalogue-static/api/phones",n=document.querySelector("body"),e=[];function o(){fetch("".concat(t,".json")).then(function(t){return t.ok?t.headers.get("content-type").includes("application/json")?t.json():Promise.reject(new Error("Wrong content-type!")):Promise.reject(new Error("".concat(t.status)))}).then(function(o){var c=document.createElement("table");c.style.border="thick solid #000",o.forEach(function(t){var n=document.createElement("tr");n.innerText=t.name,c.appendChild(n),e.push(t.id)}),n.appendChild(c),e.forEach(function(n){fetch("".concat(t,"/").concat(n,".json")).then(function(t){return t.ok?t.json():Promise.reject(new Error("".concat(t.status)))}).then(function(t){return t}).catch(function(t){return t})})}).catch(function(t){setTimeout(function(){var e=document.createElement("div");e.setAttribute("style","\n        display: flex;\n        width: 300px;\n        height: 50px;\n        justify-content: center;\n        align-items: center;\n        position: absolute;\n        top: 10%;\n        right: 10%;\n        background-color: red;\n        font-size: 24px;\n        font-weight: bold;\n        border-radius: 30px;\n      "),e.textContent="ERROR - code ".concat(t),n.appendChild(e)},5e3)})}o();
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ea58a44f.js.map