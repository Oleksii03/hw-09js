const e=document.querySelector(".js-banner"),t=document.querySelector(".js-timer");setTimeout((()=>{let s=10;e.classList.add("is-visible");const i=setInterval((()=>{t.textContent=s,s-=1,s<0&&(clearInterval(i),e.classList.remove("is-visible"))}),1e3)}),3e3);
//# sourceMappingURL=banner.59ed0bfe.js.map
