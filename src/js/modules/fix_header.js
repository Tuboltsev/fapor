var fixHeader = function(header) {
	header = $(header);
	header.removeClass('fix');

	$(window).scroll(function() {
		if ($(this).scrollTop() > header.height() && $(this).width() <= 992) {
			header.addClass('fix');
			$('body').css('padding-top', header.height());
		} else {
			header.removeClass('fix');
			$('body').css('padding-top', 0);
		}
	});
};


export default fixHeader;