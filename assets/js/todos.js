// Check off specific Todos by Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todos
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	// stop event bubbling
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		// grabbing new todo text
		var todoText = $(this).val();
		// clearing the text input
		$(this).val("");
		// append new input to the list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle()
});