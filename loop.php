<?php if (have_posts()): while (have_posts()) : the_post(); ?>

	<!-- article -->
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<!-- post thumbnail -->
		<?php if ( has_post_thumbnail()) : // Check if thumbnail exists ?>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
        <figure>
          <?php the_post_thumbnail(); // Declare pixel size you need inside the array ?>
        </figure>
			</a>
		<?php endif; ?>
		<!-- /post thumbnail -->

    <div class="loop-content">
      <!-- post title -->
      <h3>
        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
      </h3>
      <!-- /post title -->

      <?php html5wp_excerpt('html5wp_index'); // Build your custom callback length in functions.php ?>

      <?php edit_post_link(); ?>
    </div><!-- loop-content -->

	</article>
	<!-- /article -->

<?php endwhile; ?>

<?php else: ?>

	<!-- article -->
	<article>
		<h3><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h3>
	</article>
	<!-- /article -->

<?php endif; ?>
