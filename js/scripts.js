function anichangeMen() {
 if ( $(".jobs-active-men").css('display') == 'none' ) {
 $(".jobs-active-men").animate({height: 'show'}, 700);
 document.getElementById("jobs-arrow-men").style.transform = 'rotate(-180deg)';
 } else {
 $(".jobs-active-men").animate({height: 'hide'}, 700);
 document.getElementById("jobs-arrow-men").style.transform = 'rotate(-360deg)';
 }	
}

function anichangeUx() {
 if ( $(".jobs-active-ux").css('display') == 'none' ) {
 $(".jobs-active-ux").animate({height: 'show'}, 700);
 document.getElementById("jobs-arrow-ux").style.transform = 'rotate(-180deg)';
 } else {
 $(".jobs-active-ux").animate({height: 'hide'}, 700);
 document.getElementById("jobs-arrow-ux").style.transform = 'rotate(-360deg)';
 }	
}

function anichangeFe() {
 if ( $(".jobs-active-fe").css('display') == 'none' ) {
 $(".jobs-active-fe").animate({height: 'show'}, 700);
 document.getElementById("jobs-arrow-fe").style.transform = 'rotate(-180deg)';
 } else {
 $(".jobs-active-fe").animate({height: 'hide'}, 700);
 document.getElementById("jobs-arrow-fe").style.transform = 'rotate(-360deg)';
 }	
}

$(".tab-item").not(":first").hide();
$(".tab").click(function() {
	$(".tab").removeClass("active-panel-lk").eq($(this).index()).addClass("active-panel-lk");
	$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-panel-lk"); 