<?php /* Template Name: General */ get_header(); ?>

	<main role="main">
    <div class="content-wrap">
		<!-- section -->
		<section class="main-content-area">
			<?php if (have_posts()): while (have_posts()) : the_post(); ?>
				<!-- article -->
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
					<?php the_content(); ?>
				</article>
				<?php edit_post_link(); ?>
				<!-- /article -->
			<?php endwhile; ?>
			<?php else: ?>
				<!-- article -->
				<article>
					<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
				</article>
				<!-- /article -->
			<?php endif; ?>
		</section>
		<!-- /section -->
    </div>
    <div class="contact-container">
      <div class="content-wrap">
        <div class="contact-wrapper">
          <h3>Hast Du noch Fragen?</h3>
          <?php echo do_shortcode('[contact-form-7 id="59" title="Kontaktformular 1"]'); ?>
        </div>
        <div class="gmaps-wrapper">
          <?php echo do_shortcode('[ank_google_map]'); ?>
        </div>
      </div>
    </div>
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
