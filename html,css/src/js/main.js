<<<<<<< HEAD

=======
>>>>>>> develop
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
<<<<<<< HEAD
});
=======
});

window.addEventListener("load",() =>{
    const navLinkFlag = document.querySelector("body");
    const navLinks = document.querySelectorAll(".js_nav-link");
    
    
    navLinks.forEach((navLink) => {
        if(navLinkFlag.classList.contains("top")){
            if(navLink.classList.contains("js_nav-link__top")){
                navLink.classList.add("is-active");
            }
        }
        if(navLinkFlag.classList.contains("menu")){
            if(navLink.classList.contains("js_nav-link__menu")){
                navLink.classList.add("is-active");
            }
        }
        if(navLinkFlag.classList.contains("news")){
            if(navLink.classList.contains("js_nav-link__news")){
                navLink.classList.add("is-active");
            }
        }
        if(navLinkFlag.classList.contains("contact")){
            if(navLink.classList.contains("js_nav-link__contact")){
                navLink.classList.add("is-active");
            }
        }

    });
        
});
>>>>>>> develop
