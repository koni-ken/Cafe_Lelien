const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");
const navLinkFlag = document.querySelector("body");
const navLinks = document.querySelectorAll(".js_nav-link");
const kvTextElement = document.querySelector(".m_kv-txt");
const kvText = kvTextElement.textContent; // テキストを取得
const tl = gsap.timeline();


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navigation.classList.toggle("is-active");
  body.classList.toggle("is-active");

});

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

    // m_kv-txtのテキストを一文字ずつ分割してアニメーションを適用
    kvTextElement.textContent = ""; // 元のテキストを消す

    // 一文字ずつspanタグに
    kvText.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char;
      kvTextElement.appendChild(span);
    });
  

  // ヘッダーロゴとナビゲーションアイテムのアニメーション
  gsap.from(".l_header-logo", {
    opacity: 0,  
    y: -50,      
    duration: 1, // 1秒かけて
    ease: "power2.out",
    delay: 0.2   // ページロード後0.2秒遅延
  });

  // ヘッダーナビゲーションの各アイテムにアニメーションを追加
  gsap.from(".l_header-nav_item", {
    opacity: 0,        // 初期は透明
    y: -30,            // 少し上から
    duration: 0.8,     // 0.8秒かけて表示
    ease: "power2.out", // 滑らかな動き
    stagger: 0.1,      // 0.1秒間隔で順番に表示
    delay: 0.5         // ロゴが表示された後に開始
  });


  // 一文字ずつアニメーションを適用
  gsap.from(kvTextElement.querySelectorAll("span"), {
    opacity: 0,           // 透明状態から
    y: 20,                // 少し下から上に
    scale: 0.8,           // 小さくして拡大
    duration: 1,          // 1秒間かけてアニメーション
    ease: "back.out(1.7)", // バウンス効果で立体感
    stagger: 0.05,        // 0.05秒ずつずれて表示
    scrollTrigger: {
      trigger: ".m_kv-txt", // スクロールトリガーの対象
      start: "top 80%"      // トリガー位置
    }
  });

  // セクションタイトル（m_sec-ttl）にアニメーションを追加
  gsap.from(".m_sec-ttl", {
    opacity: 0,            // 透明から
    y: 50,                 // 下から上に
    scale: 0.8,            // 少し小さく
    duration: 0.7,         // 0.8秒で表示
    ease: "power2.out",    // 滑らかな動き
    scrollTrigger: {
      trigger: ".m_sec-ttl", // トリガーは各セクションタイトル
      start: "top 50%",      // 表示タイミング
    }
  });

  gsap.from(".news_animetion", {
    opacity: 0,            // 透明から
    y: -50,                 // 下から上に
    scale: 0.9,            // 少し小さく
    duration: 0.8,         // 0.8秒で表示
    ease: "power2.out",    // 滑らかな動き
    scrollTrigger: {
      trigger: ".kv", // トリガーは各セクションタイトル
      start: "top 10%",      // 表示タイミング
    }
  });



  // ドリンクのメニューリストにアニメーションを追加
  gsap.utils.toArray('.menu_list-item').forEach((menuItem) => {
    gsap.from(menuItem, {
      opacity: 0, // 初期は透明
      y: 50,     // 少し下から上に移動
      duration: 1, // アニメーションの時間
      ease: 'power2.out', // 滑らかな動き
      scrollTrigger: {
        trigger: menuItem, // スクロールトリガーの対象
        start: 'top 80%', // トリガー位置
        toggleActions: 'play none none none' // トリガー時のアクション
      }
    });
  });

  // フードのメニューリストにアニメーションを追加
  gsap.utils.toArray('.menu_other-item').forEach((menuOtherItem) => {
    gsap.from(menuOtherItem, {
      opacity: 0, // 初期は透明
      y: 50,     // 少し下から上に移動
      duration: 1, // アニメーションの時間
      ease: 'power2.out', // 滑らかな動き
      scrollTrigger: {
        trigger: menuOtherItem, // スクロールトリガーの対象
        start: 'top 80%', // トリガー位置
        toggleActions: 'play none none none' // トリガー時のアクション
      }
    });
  });

  // フッターロゴやSNSアイコンにもアニメーションを適用
  gsap.from(".l_footer-logo, .l_footer-sns_icon", {
    opacity: 0,  // 透明から
    y: 30,       // 下から上に
    duration: 1, // 1秒かけて
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".l_footer", // フッターが表示されるタイミングで
      start: "top 90%"      // トリガー位置
    }
  });

  // フッターのナビゲーションリストにアニメーションを追加
  gsap.from(".l_footer-nav_item", {
    opacity: 0,        // 透明から
    y: 20,             // 少し下から上に移動
    duration: 0.8,     // 0.8秒間かけて表示
    ease: "power2.out", // 滑らかな動き
    stagger: 0.1,      // 0.1秒間隔で一つずつ順番に表示
    scrollTrigger: {
      trigger: ".l_footer-nav", // フッターナビゲーションが表示されるタイミング
      start: "top 90%",         // トリガー位置
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

  // 要素が正しく取得されているか確認
  console.log(header); // ヘッダーの要素が表示されるか確認
  console.log(footer); // フッターの要素が表示されるか確認

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

