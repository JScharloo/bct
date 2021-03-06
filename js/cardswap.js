$(function() {
	function hotSwap(event) {
		event.preventDefault();

		var target = event.currentTarget;
		var parent = $(target).parent("div");

		if ($(parent).hasClass("expand")) {
			target = $(parent);
		}

		$(".card-container").find("div").each(function(i, elem) {
			$(elem).toggle(1000, "linear").off("click");
		});

		$(target)
			.toggleClass("expand")
			.show(1000)
			.off("click");

		$("#close-card").toggle();
	}

	function closeCard(event) {
		event.preventDefault();

		$(".card-container").find("div").each(function(i, elem) {
			if ($(elem).hasClass("expand")) {
				$(elem)
					.toggleClass("expand")
					.show(1000);
			} else {
				$(elem).toggle(1000, "linear");
			}
			$(elem).click(function(event) {
				hotSwap(event);
			});
		});
		$("#close-card").toggle();
	}

	$(".card-container>div").click(function(event) {
		hotSwap(event);
	});
	$("#close-card").click(function(event) {
		closeCard(event);
	});
});
