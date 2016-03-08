//Logic Sector
var arrayStart = [];
var arrayAdd = function(userNumber){
	for (var i = 2; i < userNumber; i++){
		arrayStart.push(i);
	}
	arrayStart.push(userNumber);
};


/* Alternative Thought Methods
for (var x=2; x<userNumber; x++){
	for (var i=x; i<arrayStart.length; i++){
		if (arrayStart[i] % x !== 0){
		arrayFinish.push(arrayStart[i]);}
	}
}


for (var i=0; i<arrayStart.length; i++){
	if (i !== undefined){
		alert(arrayStart[i]+ " ");
	}
}
*/

//Page Listeners

$("form#gather").submit(function(event){
  var userNumber = $("input#userInput").val();

  arrayAdd(userNumber);

	for (var x=2; x<userNumber; x++){
		for (var i=x; i<arrayStart.length; i++){
			if (arrayStart[i] % x === 0){
			delete arrayStart[i];}
		}
	}


	$(".result").show();
	$("#primes").append(arrayStart.join(' '));


	event.preventDefault();
});
