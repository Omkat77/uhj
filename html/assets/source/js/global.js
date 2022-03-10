///jQuery = jQuery.noConflict();
var EXLY = {
    windowWidth: document.body.clientWidth,
    init: function() {
    
        // HTML5 Sementic elements
        document.createElement("header");
        document.createElement("nav");
        document.createElement("main");
        document.createElement("figure");
        document.createElement("footer");

        
		EXLY.testimonialSlider();
       
    },  

	// Testimonal Slider 
	
	testimonialSlider: function() {	
			$('.testimonial-container').slick({
				dots: true,
				arrows:false,
				infinite: true,
				speed:2000,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
                autoplaySpeed: 2000,
			  });
	},  
};


$(document).ready(function() {
    EXLY.init();
});






