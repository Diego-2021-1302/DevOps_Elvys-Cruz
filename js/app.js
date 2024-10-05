window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel_list_samsung'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indica_samsung',
		arrows: {
			prev: '.carousel__ant_samsung',
			next: '.carousel__sig_samsung'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel_list_iphone'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indica_iphone',
		arrows: {
			prev: '.carousel__ant_iphone',
			next: '.carousel__sig_iphone'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});

	
  