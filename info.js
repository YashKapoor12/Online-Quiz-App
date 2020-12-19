

let name=sessionStorage.getItem("name");
let name_place=document.querySelector(".name");

name_place.innerHTML=name;


let time_place=document.querySelector(".timer_show");
time_place.innerHTML=`You competed the quiz in ${sessionStorage.getItem("time")}`

let score=sessionStorage.getItem("score");
let score_place=document.querySelector(".scoree");
score_place.innerHTML=score;