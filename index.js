!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const o=r(1),n=r(3);o.init(n(p5))},function(e,t,r){const o=r(2);let n,i=Math.floor(window.innerWidth),a=Math.floor(window.innerHeight),c=null,u=0,l=e=>{e.setup=()=>{e.frameRate(60),c=document.getElementsByTagName("canvas")[0],e.createCanvas(i,a)},e.draw=()=>{e.clear(),function(){const e=Math.floor(window.innerWidth),t=Math.floor(window.innerHeight);i===e&&a===t||(i=e,a=t,c.width=i,c.height=a,c.style.width=i,c.style.height=a)}(),u+=-n.rotationSpeed,e.noStroke();const t=i/2,r=t,o=1.39*(a/2),l=n.magnitude;for(let i=0;i<n.rays;i++){const a=i*(2*Math.PI)/n.rays+u,c=i+1===n.rays?u:(i+1)*(2*Math.PI)/n.rays+u,s=l*t*Math.sin(a)+r,f=l*t*Math.cos(a)+o,d=l*t*Math.sin(c)+r,g=l*t*Math.cos(c)+o,h=n.colorScheme[i%n.colorScheme.length];"SECRET_TOKEN___TRANSPARENT"!==h&&(n.showBorder&&(e.stroke(e.color(55)),e.strokeWeight(5)),e.fill(h),e.triangle(r,o,s,f,d,g),n.showBorder&&e.noStroke())}}};e.exports.init=function(e){n=e,new o(l)}},function(e,t){e.exports=p5},function(e,t){e.exports=function(){const e=new URLSearchParams(window.location.search),t=Number(e.get("c")||0),r=Number(e.get("m")||5),o=Number(e.get("rays")||32),n=Number(e.get("speed")||1),i=function(e,t){const r=e.get(t);return"true"===String(r).toLocaleLowerCase()}(e,"showBorder");return{colorScheme:[["rgb(188, 45, 0)","SECRET_TOKEN___TRANSPARENT"],["rgb(255, 255, 0)","rgb(255)"],["rgb(255, 255, 0)","rgb(240, 240, 0)"],["rgb(255, 0, 0)","rgb(255, 255, 0)"],["rgb(255, 255, 0)","rgb(255, 0, 255)","rgb(0, 255, 255)"]][t],color:"rgb(0)",magnitude:r,outlineColor:"rgb(255)",rays:o,rotationSpeed:.004*n,showBorder:i}}}]);