!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelector(".menu-button"),t=document.documentElement.clientWidth,n=document.querySelector(".top-menu"),o=document.querySelector(".popup-menu");t<768&&(e.style="display: block",e.previousElementSibling.style="display: none",window.addEventListener("scroll",()=>{window.pageYOffset>237?n.style="position: fixed":n.style="position: relative"})),e.addEventListener("click",()=>{o.style="display: flex"}),o.addEventListener("click",e=>{e.target.matches("img, a")&&(o.style="display: none")})};var l=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=document.querySelector(".main-slider").children;let o,l=document.querySelectorAll(".dot"),r=0;t.forEach(e=>{e.style="display: none"}),t[0].style="display: flex";const c=(e,t,n)=>{"LI"===e[t].tagName?e[t].classList.remove("slick-active"):e[t].style=n},s=(e,t,n)=>{"LI"===e[t].tagName?e[t].classList.add("slick-active"):e[t].style=n},a=()=>{c(t,r,"display: none"),c(n,r,"display: none"),c(l,r),r++,r>=t.length&&(r=0),s(t,r,"display: flex"),s(n,r,"display: flex"),s(l,r)},i=(e=3e3)=>{o=setInterval(a,e)};e.addEventListener("click",e=>{e.preventDefault();let n=e.target;n.matches("#right, #left, button, #arrow-right, #arrow-left")&&(c(t,r,"display: none"),c(l,r),n.matches("#right, #arrow-right")?r++:n.matches("#left, #arrow-left")?r--:n.matches("button, .dot")&&l.forEach((e,t)=>{e===n.closest(".dot")&&(r=t)}),r>=t.length&&(r=0),r<0&&(r=t.length-1),s(t,r,"display: flex"),s(l,r))}),e.addEventListener("mouseover",e=>{(e.target.matches("#left, #right, .slider-arrow")||e.target.matches("button, .dot"))&&clearInterval(o)}),e.addEventListener("mouseout",e=>{(e.target.matches("#left, #right, .slider-arrow")||e.target.matches("button, .dot"))&&i()}),i()};var r=()=>{const e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size: 1rem; color: #ffd11a; display: block; margin:auto";const n=document.getElementById("thanks");e.forEach(e=>{const l=()=>{e.closest(".popup")&&(e.closest(".popup").style="display: none")};let r=e.querySelector('input[type="checkbox"]');e.addEventListener("submit",c=>{if(c.preventDefault(),"footer_form"===e.id||r.checked||(e.after(t),t.textContent="Дайте согласие на обработку данных"),"footer_form"===e.id||r.checked){e.after(t),t.textContent="Идет отправка...";const r=new FormData(e);let c={};r.forEach((e,t)=>{c[t]=e}),o(c).then(e=>{if(200!==e.status)throw new Error("Status network is not 200");n.style="display: block",t.textContent="",l()}).catch(e=>{n.querySelector("p").innerHTML="Извините. \n                        <br> Что-то пошло не так.",n.style="display: block",t.textContent="",l(),console.error(e)}).finally(()=>{setTimeout(()=>{n.style="display: none",l(),t.textContent=""},3e3)})}})});const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var c=()=>{const e=document.getElementById("card_order"),t=e.querySelectorAll('input[type="radio"]'),n=e.querySelector(".price-message input"),o=document.getElementById("price-total"),l=[0,3e3,6e3,9e3,12e3];let r=o.textContent;n.addEventListener("input",e=>{let n=e.target;"тело"===n.value&&(console.log(n.value),r=.7*o.textContent,o.textContent=r,t.forEach((e,t,n)=>{e.addEventListener("change",t=>{if(console.log(r),n[4].checked){let n=o.textContent;if(console.log(n),"card_leto_mozaika"===t.target.id)return o.textContent=.7*(r-2e3);o.textContent=.7*+l[e.id.slice(1)]}if(n[5].checked){let n=o.textContent;if("card_leto_schelkovo"===t.target.id)return o.textContent=.7*(+n+2e3);o.textContent=Math.floor(.7*(+l[e.id.slice(1)]+2e3))}})}))}),t.forEach((e,t,n)=>{e.addEventListener("change",t=>{if(console.log(1),n[4].checked){let n=o.textContent;if("card_leto_mozaika"===t.target.id)return o.textContent=n-2e3;o.textContent=+l[e.id.slice(1)]}if(n[5].checked){let n=o.textContent;if("card_leto_schelkovo"===t.target.id)return o.textContent=+n+2e3;o.textContent=+l[e.id.slice(1)]+2e3}})})};var s=()=>{document.querySelectorAll(".popup").forEach(e=>{e.addEventListener("click",t=>{let n=t.target;"gift"===e.id&&n.matches(".overlay, .close-btn, img")&&(console.log(n),e.style="display: none"),n.matches("img, .overlay")&&(e.style="display: none"),"thanks"===e.id&&n.matches("img, .overlay, .close-btn")&&(e.style="display: none")})})};var a=()=>{const e=document.querySelectorAll('input[name = "phone"]'),t=document.querySelectorAll('input[name = "name"]');e.forEach(e=>{maskPhone("#"+e.id)}),t.forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.match(/[А-Яа-я\s]*$/)})})};(()=>{const e=document.querySelector(".head"),t=document.getElementById("callback_form"),n=document.getElementById("free_visit_form"),o=document.getElementById("gift"),l=document.getElementById("totop"),r=document.querySelector(".fixed-gift"),c=document.querySelector("ul");e.addEventListener("click",e=>{let o,l,r;o=l=r=e.target,o=o.closest(".clubs-list"),o&&(c.style.display="block"!==c.style.display?"block":"none"),null===o&&(c.style="display: none"),l=l.closest(".callback-btn"),l&&(t.style="display: flex"),r=r.closest(".free-visit"),r&&(n.style="display: flex;")}),l.style="display: none",window.addEventListener("scroll",()=>{window.pageYOffset>700?l.style="display: block":l.style="display: none"}),r.addEventListener("click",()=>{o.style="display: flex;",r.style="display: none"})})(),s(),l(),r(),o(),c(),a()}]);