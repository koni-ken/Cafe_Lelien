<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Lelian</title>
    <meta name="description" content="安らぎへとあなたを繋ぐ" />
    <meta name="format-detection" content="telephone=no" />
    
    <!-- favicon/web-clip-icon -->
    <link rel="icon" href="favicon.ico" type="image/ico" />
    <link rel="icon" href="favicon.png" type="image/png" />
    <link rel="icon" href="favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="webclip.png" />
    
     <!-- ogp -->
    <meta property="og:site_name" content="LeLien" />
    <meta property="og:url" content="サイトのURL（絶対パス）" />
    <meta property="og:type" content="website(Webサイトのトップページ) or article（記事ページなどトップページ以外のページ） or blog（ブログのトップページ）" />
    <meta property="og:title" content="LeLien" />
    <meta property="og:description" content="安らぎへとあなたを繋ぐ" />
    <meta property="og:image" content="OGP画像のURL（絶対ぱす）推奨サイズは1200*630" />
    <meta property="og:locale" content="ja_JP" />
    <meta property="fb:app_id" content="AppID">
    
    <!-- twitter専用の出力いる？？？ -->
    <meta name="twitter:card" content="summary_large_image or summary" />
    <meta name="twitter:site" content="@twitter_id" />
    <meta name="twitter:description" content="安らぎへとあなたを繋ぐ" />
    <meta name="twitter:image:src" content="URL" />
    
     <!-- google fonts -->
     <!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"rel="stylesheet" /> -->
    
     <!-- css -->
    <!-- <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/main.js" defer></script> -->
    <?php wp_head(); ?>
  </head>


<body class="top">
  <header class="l_header">
    <h1 class="l_header-logo">
      <a href="./index.html" class="l_header-logo_link">
           <div class="l_header-logo_thumb-wrapper">
               <img src="<?php echo esc_url( get_template_directory_uri() . '/img/logo.svg' ); ?>" alt="ロゴ" width="500" height="500" class="l_header_thumb">

               </div>
      </a>
  </h1>
  
    <nav class="l_header-nav js_navigation">
      <ul class="l_header-nav_list">
        <li class="l_header-nav_item">
          <a href="<?php echo home_url() ; ?>" class="l_header-nav_link js_nav-link js_nav-link__top">Top</a>
        </li>
        <li class="l_header-nav_item">
          <a href="<?php echo home_url() ; ?>#concept" class="l_header-nav_link ">Concept</a>
        </li>
        <li class="l_header-nav_item">
          <a href="<?php echo home_url( '/menu' ); ?>" class="l_header-nav_link js_nav-link js_nav-link__menu">Menu</a>
        </li>
        <li class="l_header-nav_item">
          <a href="<?php echo home_url( '/news' ); ?>" class="l_header-nav_link js_nav-link js_nav-link__news">News</a>
        </li>
        <li class="l_header-nav_item">
          <a href="index.html#access" class="l_header-nav_link "> Access</a>
        </li>          
        <li class="l_header-nav_item">
          <a href="<?php echo home_url( '/contact' ); ?>" class="l_header-nav_link js_nav-link js_nav-link__contact">Contact</a>
        </li>
      </ul>
    </nav>
      
    <button class="m_hamburger js_hamburger">
      <span class="m_hamburger-bar"></span>
      <span class="m_hamburger-bar"></span>
      <span class="m_hamburger-bar"></span>
    </button>
  </header>