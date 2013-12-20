function eventListener() {
	var questionInput = document.getElementById("question-input")

	questionInput.addEventListener('keypress', function(e){
		if (e.keyCode === 13){
			var inputField = this
			hankAnswers(inputField);
		}
	})
}