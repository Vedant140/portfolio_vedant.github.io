const sentences = [
    "Hi, I am Vedant",
    "I am from Ramdeobaba College of Engineering and Management",
    "This is my Portfolio website"
];
const delay = 100;
const sentenceDelay = 2000; 
let index = 0;
let sentenceIndex = 0;

function typeWriter() {
    if (sentenceIndex < sentences.length) {
        const typewriterTextElement = document.getElementById('typewriter-text');
        const currentSentence = sentences[sentenceIndex];

        if (index < currentSentence.length) {
            typewriterTextElement.innerHTML += currentSentence.charAt(index);
            index++;
            setTimeout(typeWriter, delay);
        } else {
            setTimeout(() => {
                typewriterTextElement.innerHTML = '';
                index = 0;
                sentenceIndex++;
                typeWriter();
            }, sentenceDelay);
        }
    }
}
typeWriter();
