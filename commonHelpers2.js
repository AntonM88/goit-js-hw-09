import"./assets/modulepreload-polyfill-3cfb730f.js";const s="feedback-form-state",r=document.querySelector(".feedback-form"),t={email:"",message:""};r.addEventListener("input",e=>{const a=e.target.value.trim();t[e.target.name]=a,n(s,t)});r.addEventListener("submit",e=>{e.preventDefault(),c()?(console.log(t),l()):i()});function n(e,a){const o=JSON.stringify(a);localStorage.setItem(e,o)}function m(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}function l(){t.email="",t.message="",r.reset(),localStorage.removeItem(s)}function c(){return t.email.trim()!==""&&t.message.trim()!==""}function i(){alert("Fill please all fields")}function u(){const e=m(s);e&&(t.email=e.email||"",t.message=e.message||"",r.elements.email.value=t.email,r.elements.message.value=t.message)}u();
//# sourceMappingURL=commonHelpers2.js.map
