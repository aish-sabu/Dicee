var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML="Aishu wins!"
}
else if(randomNumber1<randomNumber2){
  document.querySelector(".container h1").innerHTML="Ammu wins!"
}
else {
  document.querySelector(".container h1").innerHTML="Draw!🏳"
}
