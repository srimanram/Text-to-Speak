var speech = new SpeechSynthesisUtterance();

function speakText(){
    var textToSpeak = document.getElementById('name').value;  // Use 'name' as the ID
    if (textToSpeak.trim() !== "") {
        speech.text = textToSpeak;
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    } else {
        alert("Enter something");
    }
}
