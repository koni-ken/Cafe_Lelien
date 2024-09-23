<?php
add_theme_support('title-tag');
add_theme_support('post-thumbnails');

// cssの読み込み
add_action('wp_enqueue_scripts', 'add_styles');

function add_styles() {
  wp_enqueue_style('google-fonts_style', 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
  // reset style

  wp_register_style(
    'reset_style',
    get_template_directory_uri() . '/css/reset.css',
    array(),
    '1.0'
  );
  wp_register_style(
    'swiper_style',
    'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
    array(),
    '1.0'
  );

	// main style
  wp_enqueue_style(
    'main_style',
    get_template_directory_uri() . '/css/style.css',
    array('reset_style','swiper_style'),
    '1.0'
  );
}

// jsの読み込み

add_action('wp_enqueue_scripts', 'add_scripts');
function add_scripts() {

  // swiper
  wp_register_script(
    'swiper_script',
    'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js',
    array(),
    '1.0'
  );

  // GSAP3 script
  wp_register_script(
    'gsap_script',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
    array(),
    '1.0'
  );

  // GSAP3 ScrollTrigger script
  wp_register_script(
    'gsap-scroll-trigger_script',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
    array(),
    '1.0'
  );

  wp_register_script(
    'jquery_script',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    array(),
    '1.0'
  );

  // main script
  wp_enqueue_script(
    'main_script',
    get_template_directory_uri() . '/js/main.js',
    array('swiper_script', 'gsap_script', 'gsap-scroll-trigger_script', 'jquery_script'),
    '1.0'
  );
}

/* main.js にdefer属性を付与 */
add_filter('script_loader_tag', 'add_defer', 10, 2);
function add_defer($tag, $handle) {
  // 識別名がmain_script以外はそのまま返却
  if ($handle !== 'main_script') {
    return $tag;
  }

  // deferを追加して返却する
  return str_replace(' src=', ' defer src=', $tag);
}

function post_has_archive($args, $post_type){
  if('post'== $post_type){
    $args['rewrite']=true;
    $args ["label"] = 'お知らせ'; /*「投稿」のラベル名 */
    $args['has_archive']='news'; /* アーカイブにつけるスラッグ名 */
  }
  return $args;
}

add_filter('register_post_type_args', 'post_has_archive', 10, 2);