<?php
add_theme_support('title-tag');
add_theme_support('post-thumbnails');

// cssの読み込み
add_action('wp_enqueue_scripts', 'add_styles');

function add_styles() {

  // reset style
  wp_register_style(
    'reset_style',
    get_template_directory_uri() . '/css/reset.css',
    array(),
    '1.0'
  );

	// main style
  wp_enqueue_style(
    'main_style',
    get_template_directory_uri() . '/css/style.css',
    array('reset_style'),
    '1.0'
  );
}

// jsの読み込み
add_action('wp_enqueue_scripts', 'add_scripts');
function add_scripts() {

  // main script
  wp_enqueue_script(
    'main_script',
    get_template_directory_uri() . '/js/main.js',
    array('swiper_script', 'gsap_script', 'gsap-scroll-trigger_script'),
    '1.0'
  );

}