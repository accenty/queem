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
                <img src="../img/content-img-01.png" alt="Content-image-01">
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
                <img src="img/content-img-02.png" alt="Content-image-02">
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
                <img src="img/content-img-03.png" alt="Content-image-03">
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
          <li class="column">
            <figure>
              <img src="img/product-queem-whey.png" alt="">
            </figure>
            <h3>Queem Whey</h3>
            <span class="subline">Männer - 750g</span>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            <a href="#" class="cta add-to-cart"><span>In den Warenkorb</span></a>
          </li>
          <li class="column">
            <figure>
              <img src="img/product-queem-whey.png" alt="">
            </figure>
            <h3>Queem Whey</h3>
            <span class="subline">Männer - 750g</span>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            <a href="#" class="cta add-to-cart"><span>In den Warenkorb</span></a>
          </li>
          <li class="column">
            <figure>
              <img src="img/product-queem-whey.png" alt="">
            </figure>
            <h3>Queem Whey</h3>
            <span class="subline">Männer - 750g</span>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            <a href="#" class="cta add-to-cart"><span>In den Warenkorb</span></a>
          </li>
          <li class="column">
            <figure>
              <img src="img/product-queem-whey.png" alt="">
            </figure>
            <h3>Queem Whey</h3>
            <span class="subline">Männer - 750g</span>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            <a href="#" class="cta add-to-cart"><span>In den Warenkorb</span></a>
          </li>
          <li class="column">
            <figure>
              <img src="img/product-queem-whey.png" alt="">
            </figure>
            <h3>Queem Whey</h3>
            <span class="subline">Männer - 750g</span>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            <a href="#" class="cta add-to-cart"><span>In den Warenkorb</span></a>
          </li>
          <li class="column">
            <figure>
              <img src="img/product-queem-whey.png" alt="">
            </figure>
            <h3>Queem Whey</h3>
            <span class="subline">Männer - 750g</span>
            <p>
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
            </p>
            <a href="#" class="cta add-to-cart"><span>In den Warenkorb</span></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="assortment-container">
      <div class="content-wrap">
        <h2>Sortiment</h2>
        <p>
          Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        </p>
        <a href="#" class="cta shop"><span>Zum Shop</span></a>
      </div>
    </div>
    <div class="contact-container">
      <div class="content-wrap">
        <div class="contact-wrapper">
          <h3>Haben Sie noch Fragen?</h3>
          <form>
            <fieldset>
              <input type="text" placeholder="Name">
              <input type="text" placeholder="Vorname">
            </fieldset>
            <fieldset>
              <input type="email" placeholder="E-Mail">
              <input type="text" placeholder="Telefonnummer">
            </fieldset>
            <textarea placeholder="Ihr Anliegen..."></textarea>
            <input type="submit" value="Senden">
          </form>
        </div>
        <div class="gmaps-wrapper">
          <figure>
            <img src="http://placehold.it/560x780" alt="">
          </figure>
        </div>
      </div>
    </div>
  </main>

<?php get_footer(); ?>
