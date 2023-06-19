// import '~/app/vendor/mmenu/dist/mmenu.js'

import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.client__slider', {
		// Optional parameters
		modules: [Navigation, Pagination],

		loop: true,
		autoplay: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	function menu() {
		const menu_burger = document.querySelector('.menu-burger');
		const menu_content = document.querySelector('.menu');

		menu_burger.addEventListener('click', function () {
			menu_content.classList.toggle('show');
		});
	}

	menu();
});
