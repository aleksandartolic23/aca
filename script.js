const plava = '#56bcbb' ;
var scrolled = 1;
$( document ).ready(function() {
$('a').click(function(e){
  	e.preventDefault();
	var jumpId = $(this).attr('href');
	$('body, html').animate({scrollTop: $(jumpId).offset().top}, 1000);
});



$('#one').hover(function(){
  $('#dva').finish();
  $('#tri').finish();
  $('#cetiri').finish();
  $('#pet').finish();

  document.getElementById("one").style.color=plava;
  $('#jedan').css({"opacity":"0","visibility":"visible"}).animate({opacity:1, right:-10},700);
},function(){

  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("one").style.color="white";
}
else{
  document.getElementById("one").style.color="black";
}
if (scrolled >=0 && scrolled <=10)
{
  document.getElementById("one").style.color=plava;
}
$('#jedan').animate({right:-25, opacity:0},700);
})





$('#two').hover(function(){
  $('#jedan').finish();
  $('#tri').finish();
  $('#cetiri').finish();
  $('#pet').finish();
  document.getElementById("two").style.color=plava;

    $('#dva').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},700);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("two").style.color="white";
}
else{
  document.getElementById("two").style.color="black";
}
if (scrolled >=10 && scrolled <=38)
{
  document.getElementById("two").style.color=plava;
}
  $('#dva').animate({right:-30, opacity:0},700);
})

$('#three').hover(function(){
  $('#dva').finish();
  $('#jedan').finish();
  $('#cetiri').finish();
  $('#pet').finish();
  document.getElementById("three").style.color=plava;
  $('#tri').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},700);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("three").style.color="white";
}
else{
  document.getElementById("three").style.color="black";
}
  if (scrolled >=38 && scrolled <=63)
  {
    document.getElementById("three").style.color=plava;
  }
  $('#tri').animate({right:-30, opacity:0},700);
})

$('#four').hover(function(){
  $('#dva').finish();
  $('#tri').finish();
  $('#jedan').finish();
  $('#pet').finish();
  document.getElementById("four").style.color=plava;
  $('#cetiri').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},700);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("four").style.color="white";
}
else{
  document.getElementById("four").style.color="black";
}
if (scrolled >63 && scrolled <=90)
{
  document.getElementById("four").style.color=plava;
}
  $('#cetiri').animate({right:-30, opacity:0},700);
})

$('#five').hover(function(){
  $('#dva').finish();
  $('#tri').finish();
  $('#cetiri').finish();
  $('#jedan').finish();
  document.getElementById("five").style.color=plava;
  $('#pet').css({"visibility":"visible","opacity":"0"}).animate({opacity:1, right:0},700);
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=63) || (scrolled>=90)){

  document.getElementById("five").style.color="white";
}
else{
  document.getElementById("five").style.color="black";
}
if (scrolled >=90)
{
  document.getElementById("five").style.color=plava;
}
    $('#pet').animate({right:-30, opacity:0},700);
})


});
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 scrolled = Math.floor((winScroll / height) * 100);
  	if (scrolled >= 0 && scrolled < 10) {
  		document.getElementById("one").style.color = plava;
  		document.getElementById("two").style.color = "white";
  		document.getElementById("three").style.color = "white";
  		document.getElementById("four").style.color = "white";
      document.getElementById("five").style.color = "white";
      document.getElementById("jedan").style.color = "white";
      document.getElementById("dva").style.color = "white";
      document.getElementById("tri").style.color = "white";
      document.getElementById("cetiri").style.color = "white";
      document.getElementById("pet").style.color = "white";
  	}
  	else if (scrolled >= 10 && scrolled < 38) {
      document.getElementById("one").style.color = "black";
      document.getElementById("two").style.color = plava;
      document.getElementById("three").style.color = "black";
      document.getElementById("four").style.color = "black";
      document.getElementById("five").style.color = "black";
      document.getElementById("jedan").style.color = "black";
      document.getElementById("dva").style.color = "black";
      document.getElementById("tri").style.color = "black";
      document.getElementById("cetiri").style.color = "black";
      document.getElementById("pet").style.color = "black";
  	}
  	else if (scrolled >= 38 && scrolled < 63) {
      document.getElementById("one").style.color = "white";
      document.getElementById("two").style.color = "white";
      document.getElementById("three").style.color = plava;
      document.getElementById("four").style.color = "white";
      document.getElementById("five").style.color = "white";
      document.getElementById("jedan").style.color = "white";
      document.getElementById("dva").style.color = "white";
      document.getElementById("tri").style.color = "white";
      document.getElementById("cetiri").style.color = "white";
      document.getElementById("pet").style.color = "white";
  	}
  	else if (scrolled >= 63 && scrolled < 90) {
      document.getElementById("one").style.color = "black";
      document.getElementById("two").style.color = "black";
      document.getElementById("three").style.color = "black";
      document.getElementById("four").style.color = plava;
      document.getElementById("five").style.color = "black";
      document.getElementById("jedan").style.color = "black";
      document.getElementById("dva").style.color = "black";
      document.getElementById("tri").style.color = "black";
      document.getElementById("cetiri").style.color = "black";
      document.getElementById("pet").style.color = "black";
  	}
    else if (scrolled >= 90) {
      document.getElementById("one").style.color = "white";
      document.getElementById("two").style.color = "white";
      document.getElementById("three").style.color = "white";
      document.getElementById("four").style.color = "white";
      document.getElementById("five").style.color = plava;
      document.getElementById("jedan").style.color = "white";
      document.getElementById("dva").style.color = "white";
      document.getElementById("tri").style.color = "white";
      document.getElementById("cetiri").style.color = "white";
      document.getElementById("pet").style.color = "white";
    }
}
