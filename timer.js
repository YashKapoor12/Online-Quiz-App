let date=new Date(new Date().setTime(0));
let time=date.getTime();
let secs=Math.floor((time%(100*60))/1000);
let mins=Math.floor((secs%(1000*60*60))/(1000*60));

setInterval(function(){
	if(secs<60){
		secs++;
	}
	else{
		mins++;
		secs=0
	}
	let formatted_secs=secs<10 ? `0${secs}` : `${secs}` ;
	let formatted_mins= mins<10 ? `0${mins}` : mins
	document.querySelector(".timer").innerHTML=`${formatted_mins}:${formatted_secs}`
},1000)