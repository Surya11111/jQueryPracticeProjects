$(document).ready(function(){
var speed="500";
$('li.q').on('click',function(){
	$(this).next().slideToggle(speed).siblings('li.a').slideUp();

	var img=$(this).children('img');
	$('img').not(img).removeClass('rotate');
	img.toggleClass("rotate");
})



});