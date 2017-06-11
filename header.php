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

      <div class="title-container">
        <div class="content-wrap">
					<?php if(get_field('title-h1')): ?>
          	<h1><?php the_Field('title-h1'); ?></h1>
					<?php endif; ?>
					<?php if(get_field('title-subline')): ?>
	          <p><?php the_Field('title-subline'); ?></p>
					<?php endif; ?>
					<?php if(get_field('call-to-action-link')): ?>
			      <a href="<?php the_Field('call-to-action-link'); ?>" class="cta">
			        <span><?php the_Field('call-to-action-text'); ?></span>
			      </a>
					<?php endif; ?>
        </div>

				<?php if(get_field('title-img')): ?>
          <figure><img src="<?php the_Field('title-img'); ?>" alt="<?php the_Field('title-h1'); ?>" /></figure>
				<?php endif; ?>
      </div>
    </header>
