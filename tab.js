(function ($) {

	$('.kb_tabs .tab').on('click keyup', function (e) {
		
		if (
			e.type === 'keyup' &&
			($.inArray(e.which, [13, 37, 38, 39, 40]) === -1)
		) {
			return;
		}
		
		var $tab = $(this);
		
		/* Left or up arrow */
		if (
			e.type === 'keyup' &&
			$.inArray(e.which, [37, 38]) > -1 &&
			$tab.attr('aria-selected') === 'true'
		) {
			$tab = $tab.prev();
			if ($tab.length === 0) {
				$tab = $(this).closest('.kb_tabs').find('.tab').last();
			}
		}
		
		/* Right or down arrow */
		if (
			e.type === 'keyup' &&
			$.inArray(e.which, [39, 40]) > -1 &&
			$tab.attr('aria-selected') === 'true'
		) {
			$tab = $tab.next();
			if ($tab.length === 0) {
				$tab = $(this).closest('.kb_tabs').find('.tab').first();
			}
		}
		
		$tab.focus();
		
		/* Update the tabs */
		$tab.closest('.kb_tabs').children('.tab').attr('aria-selected', 'false');
		$tab.attr('aria-selected', 'true');
		
		/* Update the panels */
		var panel = '#' + $tab.attr('aria-controls');
		$panel = $tab.closest('body').find(panel);
		$panel.closest('.kb_panels').children('.panel').attr('aria-hidden', 'true');
		$panel.attr('aria-hidden', 'false');
		
		/* If they did press enter then let's try to focus within the panel */
		if (e.type === 'keyup' && e.which === 13) {
			$panel.children("[tabindex='0']").eq(0).focus();
		}
	});

})(jQuery);
