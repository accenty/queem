<?php
/**
 * Single Product Price, including microdata for SEO
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/price.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @author  WooThemes
 * @package WooCommerce/Templates
 * @version 3.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

global $product;

?>
<div class="price-box">
  <span class="price">
		<strong>Preis</strong>
		<?php echo $product->get_price_html(); ?>
	</span>
	<?php if( get_field('price-per-unit-price') ): ?>
		<span class="price-per-unit">
			(<?php the_field('price-per-unit-price'); ?>€ / <?php the_field('price-per-unit-unit'); ?>)
		</span>
	<?php endif; ?>
</div>

<?php if( have_rows('single-product-specifics')): ?>
  <div class="additional-info">
	<?php while( have_rows('single-product-specifics')): the_row(); ?>
		<div class="entry">
			<strong><?php the_sub_field('single-product-specifics-title'); ?></strong>
			<?php the_sub_field('single-product-specifics-contents'); ?>
		</div>
	<?php endwhile; ?>
  </div>
<?php endif; ?>
