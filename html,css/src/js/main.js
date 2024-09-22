const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");
const navLinkFlag = document.querySelector("body");
const navLinks = document.querySelectorAll(".js_nav-link");
const tl = gsap.timeline();


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");

  if (hamburger && navigation && body) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      navigation.classList.toggle("is-active");
      body.classList.toggle("is-active");
    });
  } else {
    console.error("ハンバーガーメニュー、ナビゲーション、またはボディの要素が見つかりません");
  }
});

// ---------------------------------↓モカ先生と実装 ------------------------------------

window.addEventListener("load", () => {
  navLinks.forEach((navLink) => {
    if (navLinkFlag.classList.contains("top") && navLink.classList.contains("js_nav-link__top")) {
      navLink.classList.add("is-active");
    }
    if (navLinkFlag.classList.contains("menu") && navLink.classList.contains("js_nav-link__menu")) {
      navLink.classList.add("is-active");
    }
    if (navLinkFlag.classList.contains("news") && navLink.classList.contains("js_nav-link__news")) {
      navLink.classList.add("is-active");
    }
    if (navLinkFlag.classList.contains("contact") && navLink.classList.contains("js_nav-link__contact")) {
      navLink.classList.add("is-active");
    }
  });
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.l_header');
  const footer = document.querySelector('.l_footer');
  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // フッターがビューポート内に入ったらヘッダーを非表示
  if (footerRect.top <= viewportHeight && footerRect.bottom >= 0) {
    header.classList.add('hidden');  // ヘッダーを非表示
  } else {
    header.classList.remove('hidden');  // ヘッダーを表示
  }
});


document.addEventListener("DOMContentLoaded", () => {

 

  // ヘッダーロゴとナビのアニメーション
  gsap.from(".l_header-logo", {
    opacity: 0,  
    y: -50,      
    duration: 1, // 1秒かけて
    ease: "power2.out",
    delay: 0.2   // ページロード後0.2秒遅延
  });

  // ヘッダーナビにアニメーションを追加
  gsap.from(".l_header-nav_item", {
    opacity: 0,        
    y: -30,            
    duration: 0.8,     
    ease: "power2.out", 
    stagger: 0.1,     
    delay: 0.5         
  });



  // セクションタイトルにアニメーションを追加
  gsap.from(".m_sec-ttl", {
    opacity: 0,            
    y: 50,                 
    scale: 0.8,            
    duration: 0.7,         
    ease: "power2.out",    
    scrollTrigger: {
      trigger: ".m_sec-ttl", 
      start: "top 80%",      
    }
  });
// 各ページにアニメーション

  gsap.from(".news_animetion", {
    opacity: 0,            
    y: -50,                
    scale: 0.9,            
    duration: 0.8,         
    ease: "power2.out",    
    scrollTrigger: {
      trigger: ".kv", 
      start: "top 0%",      
    }
  });
  
  gsap.from(".contact-main", {
    opacity: 0,           
    y: -50,                
    scale: 0.9,            
    duration: 0.8,         
    ease: "power2.out",    
    scrollTrigger: {
      trigger: ".kv", 
      start: "top 0%",      
    }

  });
  gsap.from(".single", {
    opacity: 0,            
    y: -50,                 
    scale: 0.9,            
    duration: 0.8,         
    ease: "power2.out",    
  });
  
// メニューアイテムのアニメーション

  gsap.utils.toArray('.menu_list-item').forEach((menuItem) => {
    gsap.from(menuItem, {
      opacity: 0, 
      y: 50,     
      duration: 1, 
      ease: 'power2.out', 
      scrollTrigger: {
        trigger: menuItem, 
        start: 'top 80%', 
        toggleActions: 'play none none none' 
      }
    });
  });

  // メニューアイテムのアニメーション
 
  gsap.utils.toArray('.menu_other-item').forEach((menuOtherItem) => {
    gsap.from(menuOtherItem, {
      opacity: 0, 
      y: 50,    
      duration: 1, 
      ease: 'power2.out', 
      scrollTrigger: {
        trigger: menuOtherItem, 
        start: 'top 80%', 
        toggleActions: 'play none none none' 
      }
    });
  });

  // フッターロゴやSNSアイコンにもアニメーションを適用
  gsap.from(".l_footer-logo, .l_footer-sns_icon", {
    opacity: 0,  
    y: 30,       
    duration: 1, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".l_footer", // フッターが表示されるタイミングで
      start: "top 90%"      // トリガー位置
    }
  });

  // フッターのナビゲーションリストにアニメーションを追加
  gsap.from(".l_footer-nav_item", {
    opacity: 0,       
    y: 20,             // 下から上に
    duration: 0.8,     
    ease: "power2.out", 
    stagger: 0.1,      // 0.1秒間隔で一つずつ順番に表示
    scrollTrigger: {
      trigger: ".l_footer-nav", // フッターナビが表示されるタイミングで
      start: "top 90%",        
      toggleActions: "play none none none"
    }
  });

  // ページ全体のアニメーションを時間軸で制御するタイムライン
  tl.from(".l_header", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  })
  .from(".m_kv-txt", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5");  // 0.5秒早く開始して重ねる
});


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".l_header");
  const footer = document.querySelector(".l_footer");


  if (header && footer) {
    // スクロール時にフッターの位置を確認し、ヘッダーをGSAPで表示/非表示にする処理
    window.addEventListener("scroll", function () {
      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // フッターがビューポート内に入ったらヘッダーを非表示にする
      if (footerRect.top <= viewportHeight && footerRect.bottom >= 0) {
        // ヘッダーを非表示にするアニメーション
        gsap.to(header, { 
          y: -100,       // ヘッダーを上にスライド
          opacity: 0,    // ヘッダーをフェードアウト
          duration: 0.5, // アニメーションの持続時間
          ease: "power2.out" // スムーズな動き
        });
      } else {
        // ヘッダーを表示するアニメーション
        gsap.to(header, { 
          y: 0,          // ヘッダーを元の位置に戻す
          opacity: 1,    // ヘッダーをフェードイン
          duration: 0.5, // アニメーションの持続時間
          ease: "power2.out" // スムーズな動き
        });
      }
    });
  }
});

// オープニングアニメーション
// DOMContentLoadedイベントが発生したらアニメーション開始
$(document).ready(function() {
  const opening = $('.js_opening');
  const openingText = $('.js_opening_txt');
  const openingLogo = $('.m_opening_logo');

  // オープニングアニメーションを実行する関数
  function runOpeningAnimation() {
    // 開始時点でオープニングの透明度をゼロに設定
    gsap.set(opening, { opacity: 1 });
    gsap.set(openingText, { opacity: 0, y: 20 });
    gsap.set(openingLogo, { opacity: 0, scale: 0.8 });

    const tl = gsap.timeline({
      onComplete: () => {
        // アニメーション完了後、オープニング要素を非表示に
        gsap.to(opening, { opacity: 0, display: 'none', duration: 0.5 });
      }
    });

    // テキストをフェードインしつつ少し上にスライドさせる
    tl.to(openingText, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out'
    });

    // ロゴをスケールアップしながらフェードイン
    tl.to(openingLogo, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'back.out(1.7)'
    }, '-=1'); // テキストアニメーションと少し重ねる

    // 一定時間表示してからフェードアウト
    tl.to(opening, {
      delay: 1,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.inOut'
    });
  }

  // 初回アクセスかどうかを確認する
  function checkFirstVisit() {
    // sessionStorageを確認
    if (!sessionStorage.getItem('hasVisited')) {
      // 初回アクセス時、オープニングアニメーションを実行
      sessionStorage.setItem('hasVisited', 'true'); // フラグをセット
      runOpeningAnimation(); // オープニングアニメーションを実行
    } else {
      // 2回目以降のアクセス時はオープニングアニメーションをスキップ
      opening.hide();  // オープニング要素を非表示に
    }
  }

  // 初期化
  checkFirstVisit();
});


  

// スワイパー


  document.addEventListener('DOMContentLoaded', function () {
 
    const swiper = new Swiper('.js_slideshow', {
      loop: true,            // ループさせる
      autoplay: {
        delay: 3000,         // 自動再生の遅延時間（ミリ秒）
        disableOnInteraction: false, // ユーザー操作後も自動再生を継続
      },
      pagination: {
        el: '.swiper-pagination', // ページネーションを有効に
        clickable: true,          // ページネーションをクリック可能に
      },
      navigation: {
      },
      effect: 'fade',       // フェード効果（好みに応じて変更可能）
      speed: 1000,          // アニメーション速度（1秒）
    });
  });

