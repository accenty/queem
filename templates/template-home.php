<?php /* Template Name: Home */ get_header(); ?>

  <main>
    <div class="service-wrapper">
      <div class="content-wrap">
        <ul class="column-wrap">
          <li class="column shipping">Kostenloser Versand auf viele Produkte</li>
          <li class="column quality">Wir garantieren die beste Qualität</li>
          <li class="column service">24 Stunden Service, online & telefonisch</li>
        </ul>
      </div>
    </div>
    <div class="categories-wrapper">
      <div class="content-wrap">
        <ul class="column-wrap">
          <li class="column">
            <a href="#">
              <figure>
                <img src="http://beta.iamaviate.com/170602/wp/wp-content/uploads/2017/06/content-img-01.png" alt="Content-image-01">
              </figure>
              <div class="inner-content">
                <h2>Frau</h2>
                <p>Exklusive Produkte für Ladies</p>
              </div>
            </a>
          </li>
          <li class="column">
            <a href="#">
              <figure>
                <img src="http://beta.iamaviate.com/170602/wp/wp-content/uploads/2017/06/content-img-02.png" alt="Content-image-02">
              </figure>
              <div class="inner-content">
                <h2>Mann</h2>
                <p>Exklusive Produkte für Männer</p>
              </div>
            </a>
          </li>
          <li class="column">
            <a href="#">
              <figure>
                <img src="http://beta.iamaviate.com/170602/wp/wp-content/uploads/2017/06/content-img-03.png" alt="Content-image-03">
              </figure>
              <div class="inner-content">
                <h2>Sets</h2>
                <p>Bunte Sets für Mann & Frau</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <?php if(get_field('about-text')): ?>
    <div class="about-wrapper">
      <div class="content-wrap">
        <p class="about-text">
          <?php the_field('about-text'); ?>
        </p>
        <a href="<?php the_field('about-page-link'); ?>" class="cta about">
          <?php the_field('about-page-link-text'); ?>
        </a>
      </div>
    </div>
    <?php endif; ?>
    <?php if( have_rows('testimonial') ): ?>
    	<div class="testimonials-grid">
    	<?php while( have_rows('testimonials') ): the_row();
    		// vars
    		$image = get_sub_field('testimonial-customer-img');
    		$content = get_sub_field('testimonial-content');
    		$name = get_sub_field('testimonial-customer-name');
    	?>
    		<div class="testimonial">
          <?php if($content): ?>
            <figure>
              <img src="<?php echo $image; ?>" alt="">
            </figure>
          <div class="inner-content">
            <blockquote>
              <?php echo $content; ?>
              <em><?php echo $name; ?></em>
            </blockquote>
          </div>
          <?php endif; ?>
    		</div>
    	<?php endwhile; ?>
    </div>
    <?php endif; ?>
    <div class="featured-products">
      <div class="content-wrap">
        <ul class="column-wrap">
          <?php
          $meta_query  = WC()->query->get_meta_query();
          $tax_query   = WC()->query->get_tax_query();
          $tax_query[] = array(
            'taxonomy' => 'product_visibility',
            'field'    => 'name',
            'terms'    => 'featured',
            'operator' => 'IN',
          );

          $args = array(
            'post_type'           => 'product',
            'post_status'         => 'publish',
            'ignore_sticky_posts' => 1,
            'posts_per_page'      => $atts['per_page'],
            'orderby'             => $atts['orderby'],
            'order'               => $atts['order'],
            'meta_query'          => $meta_query,
            'tax_query'           => $tax_query,
          );

          $loop = new WP_Query( $args );
          while ( $loop->have_posts() ) : $loop->the_post(); global $product; ?>
          <li class="column">
          <a href="<?php the_permalink(); ?>">
            <?php
            if ( has_post_thumbnail( $loop->post->ID ) )
            echo get_the_post_thumbnail( $loop->post->ID, 'shop_catalog' );
            else
            echo '<figure><img src="' . the_post_thumbnail() . '" /></figure>';
            ?>
          </a>
          <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
          <span class="subline">
            <?php
                global $post, $product;
                $categ = $product->get_categories();
                echo $categ;
            ?>
          </span>
          <p><?php the_excerpt(); ?></p>

          <?php
            woocommerce_template_loop_add_to_cart( $loop->post, $product );
          ?>

          </li>
          <?php
        endwhile;
        wp_reset_query();
        ?>

        </ul>
      </div>
    </div>
    <?php if(get_field('add-content-title') || get_field('
add-content-text')): ?>
    <div class="assortment-container">
      <div class="content-wrap">
        <h2><?php the_Field('add-content-title'); ?></h2>
        <p>
          <?php the_Field('add-content-text') ?>
        </p>
        <?php if(get_field('add-content-call-to-action-url') || get_field('add-content-call-to-action-text')): ?>
          <a href="<?php the_Field('add-content-call-to-action-url') ?>" class="cta shop"><span><?php the_Field('add-content-call-to-action-text') ?></span></a>
        <?php endif; ?>
      </div>
    </div>
    <?php endif; ?>
    <div class="contact-container">
      <div class="content-wrap">
        <div class="contact-wrapper">
          <h3>Haben Sie noch Fragen?</h3>
          <?php echo do_shortcode('[contact-form-7 id="59" title="Kontaktformular 1"]'); ?>
        </div>
        <div class="gmaps-wrapper">
          <?php echo do_shortcode('[ank_google_map]'); ?>
        </div>
      </div>
    </div>
  </main>

<?php get_footer(); ?>
