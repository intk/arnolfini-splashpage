jQuery(document).ready(function() {
    if (jQuery("body.section-front-page.template-front_page_view").length) {
        jQuery("body").append('<div id="splash-overlay" aria-hidden="false"></div><div id="splash-close-btn" class="close-overlay" aria-hidden="false"><img src="/splash-page/imgs/close-icon.svg"/></div>');
        jQuery("#splash-overlay").load('/splash-page/', function() {
            var body = document.body,
                overlay = document.querySelector('#splash-overlay'),
                overlayBtts = document.querySelectorAll('div[class$="close-overlay"]');

            function overlayToggle(overlayObj) {
                var overlayOpen = overlayObj.className === 'open-overlay';
                overlay.setAttribute('aria-hidden', !overlayOpen);
                overlayObj.setAttribute('aria-hidden', !overlayOpen);
                body.classList.toggle('splash-off', !overlayOpen);
                $.fn.fullpage.destroy('all');
                for (var i = 0; i < window.scrollingTimers.length; i++) {
                    clearTimeout(window.scrollingTimers[i]);
                }
                overlay.scrollTop = 0;
            };
            
            [].forEach.call(overlayBtts, function(btt) {
                btt.addEventListener('click', function() { 
                    overlayToggle(this);
                }, false);
                btt.addEventListener('touchend', function() { 
                    overlayToggle(this);
                }, false);
            });
            populateExTicker();
        });
    }
});
