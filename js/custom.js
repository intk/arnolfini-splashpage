jQuery(document).ready(function() {
    jQuery('#splash-content').fullpage({
        autoScrolling: false,
        verticalCentered: false,
        resize: false,
        scrollOverflow: false,
        fitToSection: false,
    });
    populateExTicker();
});