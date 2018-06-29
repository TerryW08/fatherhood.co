$(function() {
    
    /*
    ** Toggle mobile menu
    */
    function toggleMobileMenu(event) {

        // Prevent
        event.preventDefault();

        // Log
        console.log('toggleMobileMenu()');

        // Toggle class
        $('body').toggleClass('mobile-menu-visible mobile-menu-hidden');

    }

    /*
    ** Bind events
    */
    $('body').on('click', '.toggle-mobile-menu', toggleMobileMenu);
    
});