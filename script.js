const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".wrapper"),
formCloseBtn = document.querySelector(".form-close");


formOpenBtn.addEventListener("click", ()=> home.classList.add("show"));
formCloseBtn.addEventListener("click", ()=> home.classList.remove("show"));
