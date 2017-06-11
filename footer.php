
<footer class="footer">
	<div class="content-wrap">
		<nav class="social-nav">
      <ul>
				<?php if(get_Field('instagram-url',10)): ?>
        <li><a href="<?php the_field('instagram-url',10); ?>" class="instagram"><span>Instagram</span></a></li>
				<?php endif; ?>
				<?php if(get_Field('facebook-url',10)): ?>
        <li><a href="<?php the_field('facebook-url',10); ?>" class="facebook"><span>Facebook</span></a></li>
				<?php endif; ?>
      </ul>
    </nav>

		<div class="copyright">
			&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>.
			<?php wp_nav_menu(array('theme_location' => 'footer-navigation')); ?>
		</div>
	</div>
</footer>

<a href="#" class="back-top">
	<span>
		Zurück nach oben
	</span>
</a>

<?php wp_footer(); ?>
</div>
</body>
</html>
