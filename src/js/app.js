// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import fixHeader from './modules/fix_header';
import Nav from './modules/nav';
import Form from './modules/validate';

( ($) => {
	'use strict';

	// When DOM is ready
	$(() => {

		fixHeader('.header-top');
		
		Nav.navToggle('#burger', '.navigation');

		Form.validate('.subscribe-form', () => {
			alert('error');
		});

		$('.reviews-slider').slick({
			nextArrow: '<i class="fa fa-angle-right"></i>',
			prevArrow: '<i class="fa fa-angle-left"></i>'
		});
	});



})(jQuery);