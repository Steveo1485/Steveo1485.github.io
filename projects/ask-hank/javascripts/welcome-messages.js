function WelcomeMessages() {
	this.messages = ["I'll answer your question for a treat...",
					 "Woof. Woof. Woof. What's up?",
					 "What's going on? Let me help!",
					 "I'm always happy to help. What's up?"],

	this.randomGreeting = function() {
		var messagesLength = this.messages.length;
		var randomMessage = Math.floor(Math.random()*messagesLength);
		return this.messages[randomMessage]
	},

	this.insert_greeting = function() {
		var hankSays = document.getElementById("hank-says");
		return hankSays.innerHTML = this.randomGreeting();
	}
};
