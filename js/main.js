$(document).ready(function () {

	var owl = $("#header-slider");

	new WOW().init();

	// owl.owlCarousel({
	// 	singleItem: true,
	// 	navigation: true,
	// 	navigationText: ["<i class='ion-ios-arrow-thin-left'></i>", "<i class='ion-ios-arrow-thin-right'></i>"],
	// 	transitionStyle: "fade",
	// 	pagination: true,
	// });
	//
	// $("#Client_Logo").owlCarousel({
	// 	autoPlay: 5000,
	// 	items: 6,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 1
	// 		},
	// 		768: {
	// 			items: 3
	// 		},
	// 		1200: {
	// 			items: 3
	// 		}
	// 	}
	// });

	// $("#blog-post").owlCarousel({
	// 	autoPlay: 5000,
	// 	items: 3,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 1
	// 		},
	// 		768: {
	// 			items: 3
	// 		},
	// 		1200: {
	// 			items: 3
	// 		}
	// 	}
	// });


	$(function () {
		$('#mixed-items').mixItUp();
	});


	// DOM Content Load Event Actions;
	$(window).load(function () {
		$('div#loading').remove();
		$('body').removeClass('loading');
	});


	$('.menu').onePageNav({
		currentClass: 'active',
		changeHash: true,

		scrollSpeed: 0
	}
			);


	$('.carousel').carousel();





});

