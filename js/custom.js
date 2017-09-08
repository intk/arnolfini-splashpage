jQuery(document).ready(function() {
	if (jQuery("body.section-front-page.template-front_page_view").length) {
		jQuery("body").append('<div id="splash-overlay"></div>');
		jQuery("#splash-overlay").load('/splash-page/', function() {
			populateExTicker();
		});

		var scrollTimer;

		var refreshScroll = function() {
			exTickerLoop();
		}

		jQuery("#splash-overlay").on('scroll', function () {
			clearTimeout(scrollTimer);
			for (var i = 0; i < window.scrollingTimers.length; i++) {
				clearTimeout(window.scrollingTimers[i]);
			}
			scrollTimer = setTimeout(refreshScroll, 250);
		});

		jQuery("body").on('click touchend', '#splash-close-btn', function(e) { 
			e.preventDefault(); 
			jQuery("#splash-overlay").css("overflow", "hidden");
			jQuery("#splash-overlay").fadeOut();
			jQuery("body").addClass("splash-off");
			for (var i = 0; i < window.scrollingTimers.length; i++) {
				clearTimeout(window.scrollingTimers[i]);
			}
		});
	}
});

