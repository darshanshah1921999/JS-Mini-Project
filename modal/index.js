const btn = document.getElementById("button");
const modalEl = document.getElementById("modal");
const closeBtn = document.getElementById("close");
btn.addEventListener("click",()=>{
    modalEl.style.display = "block";
})
closeBtn.addEventListener("click",()=>{
    modalEl.style.display = "none";
})
window.addEventListener("click",(event)=>{
   if(event.target === modalEl){
        modalEl.style.display = "none";
   }
})