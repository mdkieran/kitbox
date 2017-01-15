$(function () {
	$('button', '.kb_slidemenu').on('click', function () {
		$li = $(this).closest('li');
		if ($li.hasClass('active')) {
			$li.removeClass('active').find('li').removeClass('active');
			$li.find('button').attr('aria-expanded', 'false');
		} else {
			$li.addClass('active');
			$(this).attr('aria-expanded', 'true');
		}
	});

	$('li.active', '.kb_slidemenu').children('div').find('button').attr('aria-expanded', 'true');
});
