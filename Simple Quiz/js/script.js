
function submitanswer(){
var total=4;
var score=0;
var q1=document.forms['quizform']['q1'].value;
var q2=document.forms['quizform']['q2'].value;
var q3=document.forms['quizform']['q3'].value;
var q4=document.forms['quizform']['q4'].value;
var answers=["b","a","a","d"];
for(var i=1;i<=total;i++)
{
if(eval('q'+i) == null|| eval('q'+i) == ''){
	alert("You have missed"+i);
	return false;
}
}
for(i=1;i<=total;i++){
if(eval('q'+i) == answers[i - 1]){
	score++;
}
}

var results = document.getElementById('results');
results.innerHTML = '<h3>You scored <span>'+score+'</span>marks</h3>';
return false;
}