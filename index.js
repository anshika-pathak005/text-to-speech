let speech = new SpeechSynthesisUtterance();

let listenButton = document.querySelector(".btn");
let textArea = document.querySelector(".textarea");

let voices = [];
let voiceSelect = document.querySelector("select");

// Load voices
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
      voiceSelect.options[i] = new Option(voice.name, i);
    });
  }
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

listenButton.addEventListener("click", () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  if (textArea.value.trim().length === 0) {
    return;
  }

  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});