<?php get_header(); ?>

  <div class="content-wrap">
    <main>
      <h2>
        <?php echo sprintf( __( '%s Search Results for ', 'html5blank' ), $wp_query->found_posts ); echo get_search_query(); ?>
      </h2>

      <div class="search-results">
        <?php get_template_part('loop'); ?>
        <?php get_template_part('pagination'); ?>
      </div>

    </main>
  </div><!-- content-wrap -->

<?php get_footer(); ?>
