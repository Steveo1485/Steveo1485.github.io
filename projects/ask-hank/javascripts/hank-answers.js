function hankAnswers(inputField) {
	var hankSays = document.getElementById("hank-says")
	var possibleAnswers = ["I'm not sure, but give me a treat!",
						   "How should I know? I'm just a dog. A talking dog, but still...",
						   "Yes! I mean, No! ...maybe? Woof.",
						   "Let's think about this. I would...ANOTHER DOG! WOOF! WOOF!",
						   "Have you thought about chasing a cat instead?",
						   "I say yes! But I also eat grass.",
						   "Chase your tail and everything will become clear, I swear.",
						   "100% NO! Oh, I thought you asked if I wanted a bath...",
						   "Sorry, can you ask again? I was dreaming of rolling in the grass.",
						   "Wait! I heard a car door. I need to bark. Ask again later."]
	var randomNumber = Math.floor(Math.random()*possibleAnswers.length)
	var randomResponse = possibleAnswers[randomNumber]
	hankSays.innerText = randomResponse
	inputField.value = ""
}