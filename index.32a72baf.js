var menuOpenBtn=document.querySelector("[data-menu-button-open]"),menuCloseBtn=document.querySelector("[data-menu-button-close]"),mobileMenu=document.querySelector("[data-menu]");menuOpenBtn.addEventListener("click",(function(){var e="true"===menuOpenBtn.getAttribute("aria-expanded")||!1;menuOpenBtn.classList.toggle("is-open"),menuOpenBtn.setAttribute("aria-expanded",!e),mobileMenu.classList.toggle("is-open")})),menuCloseBtn.addEventListener("click",(function(){var e="false"===menuCloseBtn.getAttribute("aria-expanded")||!0;menuCloseBtn.classList.toggle("is-close"),menuCloseBtn.setAttribute("aria-expanded",!e),mobileMenu.classList.toggle("is-open")}));
//# sourceMappingURL=index.32a72baf.js.map
