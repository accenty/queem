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
    <header class="header">
      <div class="nav-wrapper">
        <div class="content-wrap">
          <a href="<?php echo home_url(); ?>" class="logo"><span>Queem</span></a>

          <div class="nav-container">
            <nav class="main-nav">
							<?php html5blank_nav(); ?>
            </nav>

            <div class="search-wrap">
							<?php get_template_part('searchform'); ?>
            </div>
            <div class="cart-wrap">
              <a href="#" class="cart">
                <span>Warenkorb</span>
              </a>
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
          <a href="#" class="cta">
            <span>in den Shop</span>
          </a>
        </div>

				<?php if(get_field('title-img')): ?>
          <figure><img src="<?php the_Field('title-img'); ?>" alt="<?php the_Field('title-h1'); ?>" /></figure>
				<?php endif; ?>
      </div>
    </header>
