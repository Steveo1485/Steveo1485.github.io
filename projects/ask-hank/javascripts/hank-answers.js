function hankAnswers(inputField) {
	var hankSays = document.getElementById("hank-says")
	var possibleAnswers = ["I'm not sure, but give me a treat!",
						   "How should I know? I'm just a dog. A talking dog, but still...",
						   "Yes! I mean, No! ...maybe? Woof.",
						   "Let's think about this. I would...ANOTHER DOG! WOOF! WOOF!"]
	var randomNumber = Math.floor(Math.random()*possibleAnswers.length)
	var randomResponse = possibleAnswers[randomNumber]
	hankSays.innerText = randomResponse
	inputField.value = ""
}