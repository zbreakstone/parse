// Main JS File
$(document).ready(function(){
	$('.header__menu--left, .header__menu--right, .menu__bar--top .fa.fa-times').click(function(){
		$('.menu--left, .menu--right').toggleClass('open');
	});
})