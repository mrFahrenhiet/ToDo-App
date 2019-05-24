
$("ul").on("click","li",function(){
	$(this).toggleClass("task");
	
});
$("ul").on("click","span",function(e){
	e.stopPropagation();
	$(this).parent().fadeOut(900,function(){
		$(this).remove();
	});
});
$("input").on("keypress",function(e){
	
	if (e.which===13) {
        var todot = $(this).val()
        $(this).val("")
		$("ul").append("<li class=\"kp\"><span class=\"hide\"><i class=\"fas fa-trash\"></i></span>" + " " + todot + "</li>");
	}
});
$("#loop").on("click",function(){
	$("input").slideToggle("slow");
});
$("ul").on("click","span",function(e){
	e.stopPropagation();
	$(this).parent().on("mouseenter",function(){
		$("#loop").fadeIn("slow");
	});
	$(this).parent().on("mouseleave",function(){
		$("#loop").fadeOut("slow");
	});
	});
