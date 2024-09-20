const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");
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

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.l_header');
    const footer = document.querySelector('.l_footer');
  
    // Intersection Observer の設定
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // フッターが見えたらヘッダーを非表示にする
          header.classList.add('l_header--hidden');
        } else {
          // フッターが見えなくなったらヘッダーを再表示する
          header.classList.remove('l_header--hidden');
        }
      });
    });
  
    // フッターを監視対象に追加
    observer.observe(footer);
  });
  
