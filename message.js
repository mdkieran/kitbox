$(function () {
	$('.kb_message .close').on('click', function() {
		/*
		Feel free to change this to suit your needs. You could slideUp() just
		the .kb_message class instead if you wanted.
		*/
		$(this).closest('.kb_grid.pad_top').slideUp(200);
	});
});
