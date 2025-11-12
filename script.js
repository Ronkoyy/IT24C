
const nameInput = document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput");

nameInput.addEventListener("input", function() {
  nameOutput.textContent = "Hello, " + nameInput.value + "!";
});


const quotes = [
  "Dream big. Start small. Act now",
  "Opportunities don’t happen. You create them.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t stop when you’re tired. Stop when you’re done."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");

quoteBtn.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteOutput.textContent = quotes[randomIndex];
});