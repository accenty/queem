<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
    <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<meta name="theme-color" content="#cbad79">

		<?php wp_head(); ?>

	</head>
	<body <?php body_class(); ?>>
    <div class="off-canvas-nav">
      <div class="search-wrap">
				<?php get_template_part('searchform'); ?>
      </div>
      <nav class="main-nav">
				<?php wp_nav_menu(array('theme_location' => 'header-navigation')); ?>
      </nav>
      <div class="cart-wrap">
				<?php if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {

			    $count = WC()->cart->cart_contents_count;
			    ?><a class="cart-contents cart-count" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>">Warenkorb <?php
			    if ( $count > 0 ) {
			        ?>
			        <span class="cart-contents-count">(<?php echo esc_html( $count ); ?>)</span>
			        <?php
			    } else {
						echo '(0)';
					}
			        ?></a>

			<?php } ?>
      </div>
    </div>
		<div class="page-wrap">
    <header class="header">
      <div class="nav-wrapper">
        <div class="content-wrap">
          <a href="<?php echo home_url(); ?>" class="logo"><span>Queem</span></a>

          <i class="hamburger">
            <span></span>
          </i>

          <div class="nav-container">
            <nav class="main-nav">
							<?php wp_nav_menu(array('theme_location' => 'header-navigation')); ?>
            </nav>
            <div class="cart-wrap">
							<?php if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {

						    $count = WC()->cart->cart_contents_count;
						    ?><a class="cart-contents cart-count" href="<?php echo WC()->cart->get_cart_url(); ?>" title="<?php _e( 'View your shopping cart' ); ?>">Warenkorb <?php
						    if ( $count > 0 ) {
						        ?>
						        <span class="cart-contents-count">(<?php echo esc_html( $count ); ?>)</span>
						        <?php
						    } else {
									echo '(0)';
								}
						        ?></a>

						<?php } ?>
            </div>
            <div class="search-wrap">
							<?php get_template_part('searchform'); ?>
            </div>
          </div>
        </div>
      </div>

			<?php if( have_rows('slider') ): ?>
					<div class="swiper-container title-container">
						<div class="swiper-wrapper">
						<?php while( have_rows('slider') ): the_row();
							$image = get_sub_field('title-img');
							$h1 = get_sub_field('title-h1');
							$subline = get_sub_field('title-subline');
							$ctaText = get_sub_field('call-to-action-text');
							$url = get_sub_field('call-to-action-link');
						?>
							<div class="swiper-slide">
								<div class="content-wrap">
									<?php if($h1): ?>
										<h1><?php echo $h1; ?></h1>
									<?php endif; ?>
									<?php if($subline): ?>
										<p><?php echo $subline; ?></p>
									<?php endif; ?>
									<?php if($ctaText || $url): ?>
										<a href="<?php echo $url; ?>" class="cta"><span><?php echo $ctaText; ?></span></a>
									<?php endif; ?>
								</div>
								<?php if($image): ?>
									<figure><img src="<?php echo $image; ?>" alt="<?php echo $h1; ?>"/></figure>
								<?php endif; ?>
							</div>
						<?php endwhile; ?>
					</div>
					<div class="swiper-pagination"></div>
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
		<?php endif; ?>
    </header>
