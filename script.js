
window.onload=function(){
	show(0)
	score=0
	sessionStorage.setItem("score",score)
}
let questions=[{
	id:1,
	question:"Java is originally the name of an ______?",
	correctAnswer:"Island",
	options:["Continent","Island","Area in NYC","Coffe beans"]
},
{
	id:2,
	question:"Which of these is an IDE(Integrated development environment) for Java?",
	correctAnswer:"Eclipse",
	options:["Eclipse","Pycharm","Visual studio code","Sublime text"]
},
{
	id:3,
	question:"Java is an _______ _______ language?",
	correctAnswer:"Object oriented",
	options:["famous programming","Latest programming","Excellent programming","Object oriented"]
},
{
	id:4,
	question:"Which one of this is not an object oriented programming language?",
	correctAnswer:"HTML",
	options:["HTML","Javascript","Java","Python"]
},
{
	id:5,
	question:"What is the shortcut of printing a line in java?",
	correctAnswer:"sysout and then tab",
	options:["Sysout and then tab","Alert","Print","Line"]
}
]
let quiz_score=0;
function form_submitted(e){
    let name=document.forms['start']['name'].value;
	if(!name==null || !name==""){
		e.preventDefault();
	    sessionStorage.setItem("name",name);
	    location.href="quiz.html";
	}
	else{
		document.getElementById("alert").innerHTML=`<h2>!PLEASE PROVIDE A NAME</h2>`
		e.preventDefault();
	}
}
var question_count=0
function next(){
	if(questions[question_count].id==5){
		sessionStorage.setItem("time",`${mins} minutes and  ${secs} seconds`)
	let user_answer=document.querySelector("li.option.active").innerHTML;
		if(user_answer==questions[question_count].correctAnswer){
			quiz_score+=100;
			sessionStorage.setItem("score",quiz_score)
		}
		location.href="end.html"
	}
	else{
	let user_answer=document.querySelector("li.option.active").innerHTML;
		if(user_answer==questions[question_count].correctAnswer){
			quiz_score+=100;
			sessionStorage.setItem("score",quiz_score)
		}
	question_count++;
	show(question_count);

	}
}
function show(count){
	let question=document.getElementById("questions");
	question.innerHTML=`<h2>Q${questions[count].id}.${questions[count].question}</h2>
		<ul  class="option_group" type="none">
			<li class="option">${questions[count].options[0]}</li>
			<li class="option">${questions[count].options[1]}</li>
			<li class="option">${questions[count].options[2]}</li>
			<li class="option">${questions[count].options[3]}</li>
		</ul>
	`
	toggle()
}
function toggle(){
	let option=document.querySelectorAll("li.option");

for(let i=0;i<option.length;i++){
	option[i].onclick=function (){
		for(let j=0;j<option.length;j++){
			if(option[j].classList.contains("active")){
				option[j].classList.remove("active");
			}
		}
		option[i].classList.add("active")
	}
}
}