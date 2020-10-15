const sidebar = document.getElementById("sidebar");
const sideMenu = document.getElementById("side-menu");
const main = document.getElementById("main");
const closeBtn = document.getElementById("close");

sidebar.addEventListener("click",()=>{
    sideMenu.style.width = '250px';
    main.style.marginLeft = '250px';
})

closeBtn.addEventListener("click",()=>{
    sideMenu.style.width = "0px";
    main.style.marginLeft = "0px";
})
