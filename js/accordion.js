// extra option: If an i.collapser is found as child of h2.accordion-toggle, icon-plus and icon-cancel will be toggled on/off on that icon.
$(document.createElement("style")).html(`
	.accordion-toggle {cursor:pointer}
	.accordion-content {display:none}
	.accordion-content.default {display:block}
`).appendTo($("head"));

$('.accordion').find('.accordion-toggle').click(function () {

	var thisContent = $(this).parent().find(".accordion-content");

	//Hide the other panels
	$(".accordion-content").not(thisContent).slideUp('fast').parent().find(".collapser").toggleClass("icon-cancel", false).toggleClass("icon-plus", true);

	//Expand or collapse this panel
	thisContent.slideToggle('fast').parent().find(".collapser").toggleClass("icon-cancel").toggleClass("icon-plus");

});
