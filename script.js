
window.onscroll = function() {myFunction()};
 const plava = '#56bcbb' ;
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  	console.log(winScroll);
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(height);
  var scrolled = Math.floor((winScroll / height) * 100);

  	console.log(scrolled);

  	if (scrolled >= 0 && scrolled < 10) {
  		document.getElementById("one").style.color = plava;
  		document.getElementById("two").style.color = "white";
  		document.getElementById("three").style.color = "white";
  		document.getElementById("four").style.color = "white";
      document.getElementById("five").style.color = "white";
  	}
  	else if (scrolled >= 10 && scrolled < 38) {
      document.getElementById("one").style.color = "black";
      document.getElementById("two").style.color = plava;
      document.getElementById("three").style.color = "black";
      document.getElementById("four").style.color = "black";
      document.getElementById("five").style.color = "black";
  	}
  	else if (scrolled >= 38 && scrolled < 60) {
      document.getElementById("one").style.color = "white";
      document.getElementById("two").style.color = "white";
      document.getElementById("three").style.color = plava;
      document.getElementById("four").style.color = "white";
      document.getElementById("five").style.color = "white";
  	}
  	else if (scrolled >= 60 && scrolled < 90) {
      document.getElementById("one").style.color = "black";
      document.getElementById("two").style.color = "black";
      document.getElementById("three").style.color = "black";
      document.getElementById("four").style.color = plava;
      document.getElementById("five").style.color = "black";
  	}
    else if (scrolled >= 90) {
      document.getElementById("one").style.color = "white";
      document.getElementById("two").style.color = "white";
      document.getElementById("three").style.color = "white";
      document.getElementById("four").style.color = "white";
      document.getElementById("five").style.color = plava;
    }
}
