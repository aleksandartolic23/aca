const plava = '#56bcbb' ;
var scrolled = 1;
$( document ).ready(function() {
$('a').click(function(e){
  	e.preventDefault();
	var jumpId = $(this).attr('href');
	$('body, html').animate({scrollTop: $(jumpId).offset().top}, 1000);
});



$('#kec').hover(function(){
  $('#dva').finish();
  $('#tri').finish();
  $('#cetiri').finish();
  $('#pet').finish();

  document.getElementById("kec").style.background = plava;
  $('#jedan').css({"opacity":"0","visibility":"visible"}).animate({opacity:1, right:-10},500);
},function(){

  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("kec").style.background="white";
}
else{
  document.getElementById("kec").style.background="black";
}
if (scrolled >=0 && scrolled <=10)
{
  document.getElementById("kec").style.background=plava;
}
$('#jedan').animate({right:-25, opacity:0},700);
$('#jedan').finish();
})





$('#dvojka').hover(function(){
  $('#jedan').finish();
  $('#tri').finish();
  $('#cetiri').finish();
  $('#pet').finish();
  document.getElementById("dvojka").style.background = plava;

    $('#dva').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},500);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("dvojka").style.background="white";
}
else{
  document.getElementById("dvojka").style.background="black";
}
if (scrolled >=10 && scrolled <=38)
{
  document.getElementById("dvojka").style.background=plava;
}
  $('#dva').animate({right:-30, opacity:0},700);
  $('#dva').finish();
})

$('#trojka').hover(function(){
  $('#dva').finish();
  $('#jedan').finish();
  $('#cetiri').finish();
  $('#pet').finish();
  document.getElementById("trojka").style.background = plava;
  $('#tri').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},500);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("trojka").style.background="white";
}
else{
  document.getElementById("trojka").style.background="black";
}
  if (scrolled >=38 && scrolled <=63)
  {
    document.getElementById("trojka").style.background=plava;
  }
  $('#tri').animate({right:-30, opacity:0},700);
  $('#tri').finish();
})

$('#cetvorka').hover(function(){
  $('#dva').finish();
  $('#tri').finish();
  $('#jedan').finish();
  $('#pet').finish();
  document.getElementById("cetvorka").style.background = plava;
  $('#cetiri').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},500);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("cetvorka").style.background="white";
}
else{
  document.getElementById("cetvorka").style.background="black";
}
if (scrolled >63 && scrolled <=90)
{
  document.getElementById("cetvorka").style.background=plava;
}
  $('#cetiri').animate({right:-30, opacity:0},700);
  $('#cetiri').finish();
})

$('#petica').hover(function(){
  $('#dva').finish();
  $('#tri').finish();
  $('#cetiri').finish();
  $('#jedan').finish();
  document.getElementById("petica").style.background = plava;
  $('#pet').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},500);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("petica").style.background="white";
}
else{
  document.getElementById("petica").style.background="black";
}
if (scrolled >=90)
{
  document.getElementById("petica").style.background=plava;
}
    $('#pet').animate({right:-30, opacity:0},700);
    $('#pet').finish();
})


});
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 scrolled = Math.floor((winScroll / height) * 100);
  	if (scrolled >= 0 && scrolled < 10) {
      document.getElementById("kec").style.background = plava;
      document.getElementById("dvojka").style.background = "white";
      document.getElementById("trojka").style.background = "white";
      document.getElementById("cetvorka").style.background = "white";
      document.getElementById("petica").style.background = "white";
      document.getElementById("jedan").style.color = "white";
      document.getElementById("dva").style.color = "white";
      document.getElementById("tri").style.color = "white";
      document.getElementById("cetiri").style.color = "white";
      document.getElementById("pet").style.color = "white";
  	}
  	else if (scrolled >= 10 && scrolled < 38) {
      document.getElementById("kec").style.background = "black";
      document.getElementById("dvojka").style.background = plava;
      document.getElementById("trojka").style.background = "black";
      document.getElementById("cetvorka").style.background = "black";
      document.getElementById("petica").style.background = "black";
      document.getElementById("jedan").style.color = "black";
      document.getElementById("dva").style.color = "black";
      document.getElementById("tri").style.color = "black";
      document.getElementById("cetiri").style.color = "black";
      document.getElementById("pet").style.color = "black";
  	}
  	else if (scrolled >= 38 && scrolled < 63) {
      document.getElementById("kec").style.background = "white";
      document.getElementById("dvojka").style.background ="white";
      document.getElementById("trojka").style.background =plava;
      document.getElementById("cetvorka").style.background ="white";
      document.getElementById("petica").style.background ="white";
      document.getElementById("jedan").style.color = "white";
      document.getElementById("dva").style.color = "white";
      document.getElementById("tri").style.color = "white";
      document.getElementById("cetiri").style.color = "white";
      document.getElementById("pet").style.color = "white";
  	}
  	else if (scrolled >= 63 && scrolled < 90) {
      document.getElementById("kec").style.background = "black";
      document.getElementById("dvojka").style.background = "black";
      document.getElementById("trojka").style.background = "black";
      document.getElementById("cetvorka").style.background = plava;
      document.getElementById("petica").style.background = "black";
      document.getElementById("jedan").style.color = "black";
      document.getElementById("dva").style.color = "black";
      document.getElementById("tri").style.color = "black";
      document.getElementById("cetiri").style.color = "black";
      document.getElementById("pet").style.color = "black";
  	}
    else if (scrolled >= 90) {
      document.getElementById("kec").style.background = "white";
      document.getElementById("dvojka").style.background = "white";
      document.getElementById("trojka").style.background = "white";
      document.getElementById("cetvorka").style.background = "white";
      document.getElementById("petica").style.background = plava;
      document.getElementById("jedan").style.color = "white";
      document.getElementById("dva").style.color = "white";
      document.getElementById("tri").style.color = "white";
      document.getElementById("cetiri").style.color = "white";
      document.getElementById("pet").style.color = "white";
    }
}
