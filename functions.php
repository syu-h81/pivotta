<?php
//スタイルシートの読み込み
function enqueue_multiple_styles() {
  // common.css を読み込む
  wp_enqueue_style(
    'css-common',
    get_stylesheet_directory_uri() . '/assets/css/common.css',
    array()
  );
  // layout.css を読み込む (common.css に依存)
  wp_enqueue_style(
    'css-layout',
    get_stylesheet_directory_uri() . '/assets/css/layout.css',
    array('css-common'),
    '1.0.0'
  );
}
add_action('wp_enqueue_scripts', 'enqueue_multiple_styles');


//jsファイル読み込み
function add_my_scripts() {
  // WordPress 本体の jQuery を登録解除
  wp_deregister_script('jquery');
  // jQuery を CDN から読み込む
  wp_enqueue_script(
    'jquery',
    'https://code.jquery.com/jquery-3.7.1.min.js',
    array(), // 依存なし
    '3.7.1', // バージョン
    true // フッターで読み込む
  );

  // gsap を CDN から読み込む
  wp_enqueue_script(
    'gsap',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js',
    array('jquery'),
    '3.11.5',
    true
  );

  // ScrollTrigger を CDN から読み込む
  wp_enqueue_script(
    'gsap-trigger',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js',
    array('gsap'),
    '3.11.5',
    true
  );

  // ScrollToPlugin を CDN から読み込む
  wp_enqueue_script(
    'gsap-plugin',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js',
    array('gsap-trigger'),
    '3.11.5',
    true
  );

  // common.js の読み込み
  wp_enqueue_script(
    'common-script',
    get_theme_file_uri('/assets/js/common.js'),
    array('gsap-trigger'),
    '1.0.0',
    true
  );

  // script.js の読み込み
  wp_enqueue_script(
    'main-script',
    get_theme_file_uri('/assets/js/script.js'),
    array('common-script'),
    '1.0.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'add_my_scripts');
