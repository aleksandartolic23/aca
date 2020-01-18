const plava = '#56bcbb' ;
var scrolled = 1;
$( document ).ready(function() {
$('a').click(function(e){
  	e.preventDefault();
	var jumpId = $(this).attr('href');
	$('body, html').animate({scrollTop: $(jumpId).offset().top}, 1000);
});



$('#one').hover(function(){
  document.getElementById("one").style.color=plava;
  $('#jedan').css("visibility","visible");
},function(){

  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=60) || (scrolled>=90)){

  document.getElementById("one").style.color="white";
}
else{
  document.getElementById("one").style.color="black";
}
if (scrolled >=0 && scrolled <=10)
{
  document.getElementById("one").style.color=plava;
}
$('#jedan').css("visibility","hidden");
})





$('#two').hover(function(){
  document.getElementById("two").style.color=plava;
  $('#dva').css("visibility","visible");
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=60) || (scrolled>=90)){

  document.getElementById("two").style.color="white";
}
else{
  document.getElementById("two").style.color="black";
}
if (scrolled >=10 && scrolled <=38)
{
  document.getElementById("two").style.color=plava;
}
  $('#dva').css("visibility","hidden");
})

$('#three').hover(function(){
  document.getElementById("three").style.color=plava;
  $('#tri').css("visibility","visible");
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=60) || (scrolled>=90)){

  document.getElementById("three").style.color="white";
}
else{
  document.getElementById("three").style.color="black";
}
  if (scrolled >=38 && scrolled <=60)
  {
    document.getElementById("three").style.color=plava;
  }

  $('#tri').css("visibility","hidden");
})

$('#four').hover(function(){
  document.getElementById("four").style.color=plava;
  $('#cetiri').css("visibility","visible");
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=60) || (scrolled>=90)){

  document.getElementById("four").style.color="white";
}
else{
  document.getElementById("four").style.color="black";
}
if (scrolled >60 && scrolled <=90)
{
  document.getElementById("four").style.color=plava;
}
  $('#cetiri').css("visibility","hidden");
})

$('#five').hover(function(){
  document.getElementById("five").style.color=plava;
  $('#pet').css("visibility","visible");
},function(){
  if ((scrolled >= 0 && scrolled<=10) || (scrolled >=38 && scrolled<=60) || (scrolled>=90)){

  document.getElementById("five").style.color="white";
}
else{
  document.getElementById("five").style.color="black";
}
if (scrolled >=90)
{
  document.getElementById("five").style.color=plava;
}
  $('#pet').css("visibility","hidden");
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
  	else if (scrolled >= 38 && scrolled < 60) {
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
  	else if (scrolled >= 60 && scrolled < 90) {
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
