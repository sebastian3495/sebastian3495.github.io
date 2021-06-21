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


	// Amount of time before you can hover over the box retriggering the svg animations
	const deactivate_timer = 10000; // milliseconds
	// var restart_timeline = false;

	const license = document.getElementById('license-svg');
	const server = document.getElementById('server-svg');
	const money = document.getElementById('money-svg');
	const software = document.getElementById('software-svg');
	const arrow = document.getElementById('arrow-svg');
	const loading = document.getElementById('loading-svg');
	const check = document.getElementById('check-svg');
	const line = document.getElementById('line-svg');
	const line2 = document.getElementById('line2-svg');
	const line3 = document.getElementById('line3-svg');
	const dot = document.getElementById('dot-svg');

	anime({
		targets: [server, money],
		scale: 0.1
	});

	var animationRunning = false;
	$('#greenBox').on('mouseover', function () {
		console.log(animationRunning, $(window).width());
		if (animationRunning === false && $(window).width() > 1179) {
			animationRunning = true;

			// The first circle and line animation
			var TimeLine = anime.timeline().add({
				targets: [dot],
				opacity: {value: 1, duration: 750},
				scale: {value: 1.3, duration: 750},
				rotate: {value: 570, duration: 750}
			}).add({
				targets: [line],
				opacity: 0.9,
				scale: 5,
				duration: 500,
				offset: 100
			});

			TimeLine.add({
				targets: [server, money],
				opacity: 1,
				scale: 1,
				duration: 700,
				offset: 0
			});

			TimeLine.add({
				targets: [money],
				translateX: {value: 445, duration: 1000, easing: 'easeInOutQuad'},
				scale: {delay: 1000, value: 0, duration: 500, easing: 'easeInExpo'},
				rotate: {value: 360, duration: 1000, easing: 'easeInOutBack'}
			}).add({   // first line and dot should disappear
				targets: [dot, line],
				opacity: 0,
				scale: 0.1,
				duration: 1000,
				offset: '-=500'
			}).add({   // second line and dot should appear
				targets: [dot],
				translateY: [{value: 45, duration: 10},
					{delay: 500, value: 89, duration: 1000}],
				translateX: [{value: -1}],
				opacity: [{value: 1, duration: 1000},
					{delay: 2250, value: 0, duration: 100}],
				scale: [{value: 1.3, duration: 500},
					{delay: 1750, value: 0, duration: 1000, easing: 'easeInExpo'}],
				rotate: [{value: 570}, {delay: 1000, value: 570}],
				duration: 1000,
				offset: 2100
			}).add({
				targets: [line2],
				scale: [{value: 4.8, duration: 1500},
					{delay: 1500, value: 3.8, duration: 2000}],
				opacity: [{value: 1, duration: 1000},
					{value: 0, duration: 250}],
				offset: '-=3600'
			}).add({
				targets: [line3],
				opacity: [{value: 1, duration: 1000},
					{delay: 2000, value: 0, duration: 1000}],
				scale: [{value: 4.8, duration: 1000}],
				offset: '-=4250'
			}).add({
				targets: [license],
				translateY: [{value: 50, duration: 750},
					{value: -7, duration: 500, easing: 'linear'},
					{value: 42, duration: 500, delay: 500}],
				translateX: {delay: 600, value: -270, duration: 900, easing: 'easeInOutQuad'},
				opacity: [{value: 1, duration: 1200, easing: 'linear'},
					{delay: 3800, value: 0, duration: 500, easing: 'linear'}],
				offset: '-=6000'
			}).add({
				targets: software,
				opacity: {value: 1, duration: 200, easing: 'linear'},
				offset: '-=3500'
			}).add({
				targets: arrow,
				opacity: [{value: 1, duration: 100, easing: 'linear'},
					{value: 0, duration: 50, easing: 'linear'}],
				translateX: {value: 50, duration: 50, easing: 'linear'},
				offset: '-=3500'
			}).add({
				targets: [loading],
				opacity: [{value: 1, duration: 300, easing: 'linear'},
					{value: 0, easing: 'linear'}],
				offset: '-=3400'
			}).add({
				targets: check,
				opacity: [{value: 1},
					{delay: 500, duration: 500, easing: 'linear', value: 0}],
				offset: '-=2500'
			}).add({
				targets: [money, server, software],
				opacity: {value: 0, duration: 1000, easing: 'linear'},
				translateX: {value: 0, delay: deactivate_timer},
				offset: '-=2000',
				complete: function () {
					animationRunning = false;
					console.log('ready again');

					// reset the position of the license svg
					anime({
						targets: license,
						translateY: -85
					});
				}
			});

		}

	});
});

