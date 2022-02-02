var randomVariable1=Math.floor(Math.random()*6)+1;
var image1=randomVariable1+".jpg";
var changeimg1=document.querySelectorAll("img")[0];
changeimg1.setAttribute("src",image1);

// for image 2

var randomVariable2=Math.floor(Math.random()*6)+1;
var image2=randomVariable2+".jpg";
var changeimg2=document.querySelectorAll("img")[1];
changeimg2.setAttribute("src",image2);
//Player winning
if(randomVariable1>randomVariable2){
  document.querySelector("h1").innerHTML="🥇Player 1 wins";
}else if(randomVariable1<randomVariable2){
  document.querySelector("h1").innerHTML="🥇Player 2 wins";
}else{
  document.querySelector("h1").innerHTML="Draw!";
}
