import{a as b,S as w,N as g,K as L,P as h,A as I}from"./assets/vendor-102dc098.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();b.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function V(){return(await b.get("/reviews")).data}async function A(e){return(await b.post("/requests",e)).data}const N=document.querySelector(".reviews-list");function T(e,t,o,i){return`
     <li class="reviews-list-items swiper-slide" data-id="${e}">
     <img class="reviews-image" src="${o}" alt="" 
            width="48"
            height="48"
            loading="lazy" />
          <div class="reviews-text-content">
            <h3 class="reviews-name-header">${t}</h3>
            <p class="reviews-main-text">${i}</p>
          </div>
        </li>
  `}function D(){const e='<p class="end-message">Not found</p>';N.insertAdjacentHTML("afterend",e)}function H(e){return e.map(({_id:t,author:o,avatar_url:i,review:n})=>T(t,o,i,n)).join("")}function R(e){const t=H(e);N.insertAdjacentHTML("beforeend",t)}const C=document.querySelector(".swiper"),a=document.querySelector(".button-next"),c=document.querySelector(".button-prev"),$=new w(C,{modules:[g,L,h],navigation:{nextEl:a,prevEl:c},direction:"horizontal",autoHeight:!1,autoWidth:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{320:{slidesPerView:"auto",spaceBetween:22},767:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:42},1440:{slidesPerView:4,spaceBetween:16}}});$.update();async function U(){try{const e=await V();e.length===0?D():R(e)}catch(e){console.error("Error fetching reviews:",e)}}const _=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(a.classList.contains("swiper-button-disabled")?(a.style.opacity="0.5",a.style.cursor="not-allowed"):(a.style.opacity="1",a.style.cursor="pointer"))})});_.observe(a,{attributes:!0});const z=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(c.classList.contains("swiper-button-disabled")?(c.style.opacity="0.5",c.style.cursor="not-allowed"):(c.style.opacity="1",c.style.cursor="pointer"))})});z.observe(c,{attributes:!0});U();document.getElementById("animation");function j(e){let t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=window.innerHeight||t.bottom>=0&&t.top<=window.innerHeight}function B(){let e=document.querySelector(".covers.section");e.querySelectorAll(".marquee-line").forEach(function(o){j(e)?o.classList.add("marquee-line-animation"):o.classList.remove("marquee-line-animation")})}document.addEventListener("DOMContentLoaded",B);window.addEventListener("scroll",B);const l=document.querySelector(".btn-next"),u=document.querySelector(".btn-prev"),K=new w(".swiper-box",{modules:[g,L,h],navigation:{prevEl:u,nextEl:l},direction:"horizontal",autoHeight:!1,autoWidth:!1,loop:!1,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},breakpoints:{1440:{direction:"horizontal"}}});K.update();const W=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(l.classList.contains("swiper-button-disabled")?(l.style.opacity="0.5",l.style.cursor="not-allowed"):(l.style.opacity="1",l.style.cursor="pointer"))})});W.observe(l,{attributes:!0});const F=new MutationObserver(e=>{e.forEach(t=>{t.attributeName==="class"&&(u.classList.contains("swiper-button-disabled")?(u.style.opacity="0.5",u.style.cursor="not-allowed"):(u.style.opacity="1",u.style.cursor="pointer"))})});F.observe(u,{attributes:!0});const X=Array.from(document.querySelectorAll(".accordion-container"));new I(X,{duration:600,showMultiple:!0,openOnInit:[0]});const J=document.querySelectorAll(".ac-trigger");J.forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("rotated")})});const k=document.querySelector(".btn-right"),G=new w(".swiper-skills",{modules:[g,L,h],navigation:{nextEl:k,prevEl:k,lockClass:".swiper-lock-step-navs"},breakpoints:{375:{slidesPerView:2},767:{slidesPerView:3},1280:{slidesPerView:3},1440:{slidesPerView:"auto"}},mousewheel:{invert:!0},direction:"horizontal",loop:!0,keyboard:{enabled:!0,onlyInViewport:!1,pageUpDown:!0}});G.update();const O=document.querySelectorAll(".accordion-title"),Q=document.querySelectorAll(".accordion-content");O.forEach(e=>e.addEventListener("click",()=>{const t=document.querySelector("#"+e.dataset.tab);t.classList.contains("active")?(t.classList.remove("active"),t.style.maxHeight=0):(Q.forEach(o=>{o.classList.remove("active"),o.style.maxHeight=0}),O.forEach(o=>o.classList.remove("active")),e.classList.add("active"),t.classList.add("active"),t.style.maxHeight=t.scrollHeight+"px")}));function Y(){document.querySelector(".backdrop").classList.add("active"),document.querySelector(".modal").classList.add("active"),document.addEventListener("keydown",p),document.querySelector(".backdrop").addEventListener("click",p)}function E(){document.querySelector(".backdrop").classList.remove("active"),document.querySelector(".modal").classList.remove("active"),document.removeEventListener("keydown",p),document.querySelector(".backdrop").removeEventListener("click",p)}function p(e){e.key==="Escape"&&E()}document.querySelector(".modal-close-button").addEventListener("click",E);document.querySelector("body").addEventListener("click",e=>{e.target.classList.contains("backdrop")&&E()});const Z=document.getElementById("footer-form");function ee(e){e.preventDefault(),Y()}Z.addEventListener("submit",ee);document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".mobile-menu-open-btn"),t=document.querySelector(".mobile-menu-wrapper"),o=document.querySelector("body"),i=document.querySelectorAll('.mobile-menu-wrapper a[href^="#"]');e.addEventListener("click",function(){t.classList.toggle("is-open"),o.classList.toggle("modal-open"),o.scrollIntoView()}),document.querySelector(".mobile-menu-close-btn").addEventListener("click",function(){t.classList.remove("is-open"),o.classList.toggle("modal-open")}),i.forEach(r=>{r.addEventListener("click",function(d){const y=d.target.getAttribute("href");if(y&&y.startsWith("#")){d.preventDefault(),t.classList.remove("is-open"),o.classList.remove("modal-open");const P=y.slice(1),q=document.getElementById(P);q&&q.scrollIntoView({behavior:"smooth"})}})})});const te=document.querySelectorAll(".submenu-link");document.querySelector(".navbar-menu").addEventListener("click",function(){te.forEach(function(e,t){setTimeout(function(){e.classList.toggle("is-active")},100*t)})});const f=document.querySelector(".footer-form"),s=f.elements.email,v=f.elements.comment,oe=document.querySelector(".modal"),S="form-state";f.addEventListener("submit",async e=>{e.preventDefault();const t={email:s.value,comment:v.value};try{A(t),oe.classList.add("is-open"),s.value="",v.value="",localStorage.removeItem(S),s.classList.remove("success","failure")}catch(o){alert("Please fill all fields correctly"),console.error("Error:",o.message)}});const m=JSON.parse(localStorage.getItem(S));s.value=m&&m.email?m.email:"";v.value=m&&m.comment?m.comment:"";f.addEventListener("input",e=>{localStorage.setItem(S,JSON.stringify({email:s.value.trim(),comment:v.value.trim()})),e.target.value!==""?e.target.classList.add("entered-text"):e.target.classList.remove("entered-text"),console.log(s.value.indexOf("."),s.value.length),s.value.match("@")&&(s.value.indexOf(".")===s.value.length-3||s.value.indexOf(".")===s.value.length-4)?(s.classList.add("success"),s.classList.remove("failure")):s.value!==""?(s.classList.remove("success"),s.classList.add("failure")):s.classList.remove("failure")});const x=30;s.addEventListener("input",M);v.addEventListener("input",M);function M(e){this.value.length>x&&(this.value=this.value.substring(0,x)+"...")}
//# sourceMappingURL=commonHelpers.js.map
