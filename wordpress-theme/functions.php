<?php
/**
 * Regras do Jogo Theme Functions
 */

// Suporte a recursos do tema
function regrasdojogo_setup() {
    // Suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Registrar menus
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'regrasdojogo'),
        'footer' => __('Menu Rodapé', 'regrasdojogo'),
    ));
}
add_action('after_setup_theme', 'regrasdojogo_setup');

// Registrar áreas de widgets
function regrasdojogo_widgets_init() {
    register_sidebar(array(
        'name'          => __('Barra Lateral', 'regrasdojogo'),
        'id'            => 'sidebar-1',
        'description'   => __('Adicione widgets aqui.', 'regrasdojogo'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'regrasdojogo_widgets_init');

// Enfileirar scripts e estilos
function regrasdojogo_scripts() {
    wp_enqueue_style('regrasdojogo-style', get_stylesheet_uri(), array(), '1.0');
    wp_enqueue_script('regrasdojogo-script', get_template_directory_uri() . '/js/script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'regrasdojogo_scripts');

// Custom Post Type para Livros
function regrasdojogo_custom_post_types() {
    register_post_type('livros', array(
        'labels' => array(
            'name' => __('Livros', 'regrasdojogo'),
            'singular_name' => __('Livro', 'regrasdojogo'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-book',
    ));
}
add_action('init', 'regrasdojogo_custom_post_types');

// Shortcode para botão CTA
function regrasdojogo_cta_button($atts) {
    $atts = shortcode_atts(array(
        'text' => 'Inscreva-se Agora',
        'url' => '#',
    ), $atts);
    
    return '<a href="' . esc_url($atts['url']) . '" class="btn-primary">' . esc_html($atts['text']) . '</a>';
}
add_shortcode('cta_button', 'regrasdojogo_cta_button');

// Shortcode para exibir vídeo
function regrasdojogo_video($atts) {
    $atts = shortcode_atts(array(
        'src' => '',
    ), $atts);
    
    if (empty($atts['src'])) {
        return '';
    }
    
    return '<video controls playsinline preload="metadata" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
        <source src="' . esc_url($atts['src']) . '" type="video/mp4">
        Seu navegador não suporta a reprodução de vídeo.
    </video>';
}
add_shortcode('video', 'regrasdojogo_video');
