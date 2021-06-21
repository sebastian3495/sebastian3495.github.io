var color = document.getElementsByTagName('path')[1];
const pathTargetBlue = [document.getElementsByTagName("path")[0]];
const pathTargetGreen = [document.getElementsByTagName("path")[1]];
const bothPath = document.getElementsByClassName('st0');
const bogstaver = document.getElementsByClassName('st');
const hidden_green = document.getElementById("Big_v_hidden");

// set opacitiy of green big v to 0
//hidden_green.style.opacity = '0';   already done in "index.html" as attribute


var enter_animation_running = false;

$(document).ready(function () {

	// Logo animation
	$('#logo').on('mouseenter mouseleave', function (e) {
		if (e.type === 'mouseenter' && enter_animation_running === false) {
			enter_animation_running = true;
			logo_enter_animation();
		}
	});

});




const logo_enter_animation = function () {
	anime({
		targets: bothPath,
		d: 'M 54.1 86.4 C 53.8 85.75 53.875 85.025 54.212 84.463 C 54.55 83.9 55.15 83.5 55.9 83.5 L 68.5 83.5 C 69.3 83.5 70 83.9 70.3 84.6 L 93.7 130.4 C 96.7 134.4 93.7 133.8 96.5 129.8 L 125.5 81.8 L 125.5 81.8 C 125.7 81.6 133.6 81.8 137 81.8 C 138.6 81.8 139.5 83.7 138.6 85 L 101.4 152.6 C 100.5 153.8 88.9 153.7 88.2 152.4 L 54.1 86.4',
		duration: 200,
		easing: 'linear',
		complete: function () {
			logo_leave_animation();
		}
	});

};

const logo_leave_animation = function () {

	anime({
		targets: bothPath,
		d: 'M 0 86.3 C 0.367 86.3 0.733 86.3 1.1 86.3 C 9.367 86.3 17.633 86.3 25.9 86.3 L 28 86.3 C 39 100.3 50 114.3 61 128.3 L 62.1 127.6 C 62.433 127.367 62.767 127.133 63.1 126.9 L 241.2 2.2 L 243.1 0.9 C 243.5 0.6 243.9 0.3 244.3 0 C 244.186 0.096 244.073 0.193 243.959 0.289 L 59.9 156.3 C 59.5 156.633 59.1 156.967 58.7 157.3 L 0 86.3',
		delay: 550,
		duration: 400,
		easing: 'linear',
		complete: () => {
			enter_animation_running = false;
		}
	});

	// anime({
	//     targets: pathTargetGreen,
	//     duration: 1100,
	//     easing: 'easeOutCirc',
	//     opacity: 1,
	//     delay: 450,
	//     offset: 500,
	//     complete: function() {
	//         anime({
	//             targets: pathTargetGreen,
	//             duration: 3500,
	//             easing: 'easeOutQuart',
	//             opacity: 0
	//         });
	//     }
	// });
};


// Run the function after the delayAnimation time has passed
const logo_animation = function () {

	anime({
		targets: bothPath,
		translateX: 0,
		duration: 3000
	});

	// M 54.1 86.4 C 53.8 85.75 53.875 85.025 54.212 84.463 C 54.55 83.9 55.15 83.5 55.9 83.5 L 68.5 83.5 C 69.3 83.5 70 83.9 70.3 84.6 L 93.7 130.4 C 96.7 134.4 93.7 133.8 96.5 129.8 L 125.5 81.8 L 125.5 81.8 C 125.7 81.6 133.6 81.8 137 81.8 C 138.6 81.8 139.5 83.7 138.6 85 L 101.4 152.6 C 100.5 153.8 88.9 153.7 88.2 152.4 L 54.1 86.4

	// M 0 86.3 C 0.367 86.3 0.733 86.3 1.1 86.3 C 9.367 86.3 17.633 86.3 25.9 86.3 L 28 86.3 C 39 100.3 50 114.3 61 128.3 L 62.1 127.6 C 62.433 127.367 62.767 127.133 63.1 126.9 L 241.2 2.2 L 243.1 0.9 C 243.5 0.6 243.9 0.3 244.3 0 C 244.186 0.096 244.073 0.193 243.959 0.289 L 59.9 156.3 C 59.5 156.633 59.1 156.967 58.7 157.3 L 0 86.3

	// Transform to little v
	var logo_timeline = anime.timeline().add({
		targets: bothPath,
		d: 'M 54.1 86.4 C 53.8 85.75 53.875 85.025 54.212 84.463 C 54.55 83.9 55.15 83.5 55.9 83.5 L 68.5 83.5 C 69.3 83.5 70 83.9 70.3 84.6 L 93.7 130.4 C 96.7 134.4 93.7 133.8 96.5 129.8 L 125.5 81.8 L 125.5 81.8 C 125.7 81.6 133.6 81.8 137 81.8 C 138.6 81.8 139.5 83.7 138.6 85 L 101.4 152.6 C 100.5 153.8 88.9 153.7 88.2 152.4 L 54.1 86.4',
		duration: 250,
		easing: 'linear'
	});

	// Transform to big v again
	logo_timeline.add({
		targets: bothPath,
		d: 'M 0 86.3 C 0.367 86.3 0.733 86.3 1.1 86.3 C 9.367 86.3 17.633 86.3 25.9 86.3 L 28 86.3 C 39 100.3 50 114.3 61 128.3 L 62.1 127.6 C 62.433 127.367 62.767 127.133 63.1 126.9 L 241.2 2.2 L 243.1 0.9 C 243.5 0.6 243.9 0.3 244.3 0 C 244.186 0.096 244.073 0.193 243.959 0.289 L 59.9 156.3 C 59.5 156.633 59.1 156.967 58.7 157.3 L 0 86.3',
		delay: 250,
		duration: 500,
		easing: 'linear'
	});

	logo_timeline.add({
		targets: pathTargetGreen,
		duration: 1100,
		easing: 'easeOutCubic',
		opacity: 1,
		delay: 450,
		offset: 750,
		complete: function () {
			anime({
				targets: pathTargetGreen,
				duration: 1500,
				easing: 'easeOutQuart',
				opacity: 0
			})
		}
	});

};

