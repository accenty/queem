<?php
/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

get_header( 'shop' ); ?>

<main>
  <div class="content-wrap archive">
    <?php if ( apply_filters( 'woocommerce_show_page_title', true ) ) : ?>
      <h1 class="page-title"><?php woocommerce_page_title(); ?></h1>
    <?php endif; ?>

    <?php
    /**
    * woocommerce_before_main_content hook.
    *
    * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
    * @hooked woocommerce_breadcrumb - 20
    */
    // do_action( 'woocommerce_before_main_content' );
    ?>

    <?php
    /**
    * woocommerce_archive_description hook.
    *
    * @hooked woocommerce_taxonomy_archive_description - 10
    * @hooked woocommerce_product_archive_description - 10
    */
    // do_action( 'woocommerce_archive_description' );
    ?>
    <div class="product-archive">
    <div class="cat-list" style="">
      <h3 class="toggle-cat-list">Kategorien</h3>
      <ul>
        <?php
        $taxonomy     = 'product_cat';
        $orderby      = 'name';
        $show_count   = 1;      // 1 for yes, 0 for no
        $pad_counts   = 0;      // 1 for yes, 0 for no
        $hierarchical = 1;      // 1 for yes, 0 for no
        $title        = '';
        $empty        = 0;

        $args = array(
          'taxonomy'     => $taxonomy,
          'orderby'      => $orderby,
          'show_count'   => $show_count,
          'pad_counts'   => $pad_counts,
          'hierarchical' => $hierarchical,
          'title_li'     => $title,
          'hide_empty'   => $empty
        );
        $all_categories = get_categories( $args );
        foreach ($all_categories as $cat) {
          if($cat->category_parent == 0) {
            $category_id = $cat->term_id;
            echo '<li><a href="'. get_term_link($cat->slug, 'product_cat') .'">'. $cat->name .'</a></li>';

            $args2 = array(
              'taxonomy'     => $taxonomy,
              'child_of'     => 0,
              'parent'       => $category_id,
              'orderby'      => $orderby,
              'show_count'   => $show_count,
              'pad_counts'   => $pad_counts,
              'hierarchical' => $hierarchical,
              'title_li'     => $title,
              'hide_empty'   => $empty
            );
            $sub_cats = get_categories( $args2 );
            if($sub_cats) {
              foreach($sub_cats as $sub_category) {
                // echo '<br>' . $sub_category->name ;
              }
            }
          }
        }
        ?>
      </ul>
    </div><!-- cat-list -->

    <div class="subcat-list">
      <?php
        $args = array('child_of' => 17);
        $categories = get_categories( $args );
        foreach($categories as $category) {
            echo '<p>Category: <a href="' . get_category_link( $category->term_id ) . '" title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '>' . $category->name.'</a> </p> ';
            echo '<p> Description:'. $category->description . '</p>';
            echo '<p> Post Count: '. $category->count . '</p>';
        }
      ?>
    </div><!-- subcat-list -->

    <?php if ( have_posts() ) : ?>

      <?php
      /**
      * woocommerce_before_shop_loop hook.
      *
      * @hooked woocommerce_result_count - 20
      * @hooked woocommerce_catalog_ordering - 30
      */
      // do_action( 'woocommerce_before_shop_loop' );
      ?>

      <?php woocommerce_product_loop_start(); ?>

      <?php // woocommerce_product_subcategories(); ?>

      <?php while ( have_posts() ) : the_post(); ?>

        <?php wc_get_template_part( 'content', 'product' ); ?>

      <?php endwhile; // end of the loop. ?>

      <?php woocommerce_product_loop_end(); ?>

      <?php
      /**
      * woocommerce_after_shop_loop hook.
      *
      * @hooked woocommerce_pagination - 10
      */
      do_action( 'woocommerce_after_shop_loop' );
      ?>

    <?php elseif ( ! woocommerce_product_subcategories( array( 'before' => woocommerce_product_loop_start( false ), 'after' => woocommerce_product_loop_end( false ) ) ) ) : ?>

      <?php wc_get_template( 'loop/no-products-found.php' ); ?>

    <?php endif; ?>

    <?php
    /**
    * woocommerce_after_main_content hook.
    *
    * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
    */
    do_action( 'woocommerce_after_main_content' );
    ?>
  </div><!-- product-archive -->
  </div><!-- content-wrap -->
</main><!-- main -->

<?php get_footer( 'shop' ); ?>
