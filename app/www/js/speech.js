function record2()
{
	var recognition = new webkitSpeechRecognition();
    recognition.onresult = function(event) { 
      console.log(event.results[0][0].transcript) 
    }
    recognition.start();
}

function record() {
	var maxMatches = 1;
	var promptString = "Speak now"; // optional
	var language = "en-US";         // optional
	window.plugins.speechrecognizer.startRecognize(function(result){
		alert(result);
	}, function(errorMessage){
		console.log("Error message: " + errorMessage);
	}, maxMatches, promptString, language);
}