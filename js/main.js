$(document).ready (function() {
    
    new WOW().init();
    
    
    $(".burger-nav").on("click", function(){
        
        $(".container nav ul").toggleClass("open");
        
    });
    
    
    
    
   $('.js-wp-2').waypoint(function(direction) {
       
       $('.js-wp-2').addClass('animated slideInUp'); // choose name form animate web & add here as class
       
   }, {
		offset: '70%'  // base on screen size amount would be
	});
    
    
    $('.js-wp-3').waypoint(function(direction) {
       
       $('.js-wp-3').addClass('animated fadeIn');
       
   }, {
		offset: '70%'
	});
    
   
    
    
    // delay(2300) seconds to off, 3 px go bottom, 300 speed to go bottom
    $(".iphone-btn").delay(2300).animate( {bottom: "+=-3"}, 300);  
    $(".iphone-btn").delay(300).animate( {top: "+=-3"}, 100);
    
    
    
    
});