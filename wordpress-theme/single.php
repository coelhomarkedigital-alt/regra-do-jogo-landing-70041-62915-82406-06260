<?php
/**
 * Template para Posts Individuais
 */
get_header(); ?>

<main id="main" class="site-main">
    <div class="container">
        <?php
        while (have_posts()) : the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    <div class="entry-meta">
                        <span class="posted-on">
                            Publicado em <?php echo get_the_date(); ?>
                        </span>
                        <span class="byline">
                            por <?php the_author(); ?>
                        </span>
                        <span class="cat-links">
                            em <?php the_category(', '); ?>
                        </span>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php
                    the_content();

                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . esc_html__('Páginas:', 'regrasdojogo'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <footer class="entry-footer">
                    <?php
                    $tags_list = get_the_tag_list('', esc_html__(', ', 'regrasdojogo'));
                    if ($tags_list) {
                        printf('<span class="tags-links">Tags: %s</span>', $tags_list);
                    }
                    ?>
                </footer>
            </article>

            <nav class="post-navigation">
                <div class="nav-links">
                    <div class="nav-previous">
                        <?php previous_post_link('%link', '← %title'); ?>
                    </div>
                    <div class="nav-next">
                        <?php next_post_link('%link', '%title →'); ?>
                    </div>
                </div>
            </nav>

            <?php
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;
        endwhile;
        ?>
    </div>
</main>

<?php get_footer(); ?>
