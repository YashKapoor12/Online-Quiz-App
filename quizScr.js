const startBtn=document.getElementById("start-btn");
    const mcq=document.getElementById("qtnf");
    const mcq2=document.getElementById("qtnf2");
    const mcq3=document.getElementById("qtnf3");
const results=document.getElementById('results-btn');

var score=0;
    function unhide1(){
        mcq.classList.remove('hide');
        startBtn.classList.add('hide');
    }
    function wrongAnswer1(){
        mcq.classList.add('hide');
        mcq2.classList.remove('hide');
    }
    function rightAnswer1(){
        score++;
        mcq.classList.add('hide');
        mcq2.classList.remove('hide');
    }
    function wrongAnswer2(){
        mcq2.classList.add('hide');
        mcq3.classList.remove('hide');
        }
    function rightAnswer2(){
        score++;
        mcq2.classList.add('hide');
        mcq3.classList.remove('hide');
    }
    function wrongAnswer3(){
        mcq3.classList.add('hide');
        results.classList.remove('hide');
    }
    function rightAnswer3(){
        score++;
        mcq3.classList.add('hide');
        results.classList.remove('hide');
    }
    function endTheGame(){
        alert('Your score is : '+score)
        results.classList.add('hide');
        startBtn.classList.remove('hide');
    }