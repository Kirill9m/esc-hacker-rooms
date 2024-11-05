// const menuOpenBtn = document.querySelector(".menu-open-button");
// const menuCloseBtn = document.querySelector(".menu-close-button");
const navMenu = document.querySelector(".nav-menu");
const logoContainer = document.querySelector(".logo-container");

const menuOpenBtn = document.createElement("button");
menuOpenBtn.setAttribute("class", "menu-open-button");
menuOpenBtn.style.backgroundColor = "transparent";
menuOpenBtn.style.border = "none";
menuOpenBtn.style.marginLeft = "auto";
menuOpenBtn.style.paddingRight = "20px";

logoContainer.appendChild(menuOpenBtn);

const btnOpenImg = document.createElement("img");
btnOpenImg.src = "img/open-btn.png";

menuOpenBtn.appendChild(btnOpenImg);

menuOpenBtn.addEventListener("click", () => {
    navMenu.style.display = "block";
});

const menuCloseBtn = document.createElement("button");
menuCloseBtn.setAttribute("class", "menu-close-button");
menuCloseBtn.style.backgroundColor = "transparent";
menuCloseBtn.style.border = "none";
menuCloseBtn.style.paddingRight = "20px";

navMenu.appendChild(menuCloseBtn);

const btnCloseImg = document.createElement("img");
btnCloseImg.src = "img/close-btn.png";

menuCloseBtn.appendChild(btnCloseImg);

menuCloseBtn.addEventListener("click", () => {
    navMenu.style.display = "none";
});