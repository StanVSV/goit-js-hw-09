import"./assets/gallery-9c184536.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form"),a=t.querySelector('input[name="email"]'),o=t.querySelector('textarea[name="message"]'),n="feedback-form-state",r=()=>{const e=localStorage.getItem(n);if(e){const{email:s,message:l}=JSON.parse(e);a.value=s,o.value=l}},m=()=>{const e={email:a.value.trim(),message:o.value.trim()};localStorage.setItem(n,JSON.stringify(e))};t.addEventListener("input",m),t.addEventListener("submit",e=>{e.preventDefault();const s={email:a.value.trim(),message:o.value.trim()};console.log("form sending data:",s),localStorage.removeItem(n),a.value="",o.value=""}),r()});
//# sourceMappingURL=commonHelpers2.js.map