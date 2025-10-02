# 🗣 Text-to-Speech Converter

A responsive web app built with HTML, CSS, and JavaScript that converts written text into spoken words using the Web Speech API (SpeechSynthesis).
This project was created to practice DOM manipulation, browser APIs, and responsive design.
### 🔗 [Live Demo](https://text-to-speech-9l4e.onrender.com) 

Note: Currently tested and works best on Windows browsers because voice availability depends on the operating system.

## ✨ Features

- 📝 Type anything in the text area and instantly convert it to speech  
- 🎙 Voice selection dropdown — choose from available system voices  
- 🔊 Dynamic voice updates using `speechSynthesis.onvoiceschanged`  
- 🎨 Responsive design — works smoothly on different screen sizes  
- 🖱 Clean UI with hover effects for buttons and inputs  
- 🌈 Modern theme — gradient background, rounded inputs, and adaptive sizing  

## 📂 Project Structure

```
text-to-speech/
├── index.html   # Page structure
├── style.css    # Styling and responsive layout
└── index.js     # Speech synthesis logic and event handling
```
## Screenshot
<img width="800" height="400" alt="image" src="https://github.com/user-attachments/assets/c346cec2-9ddc-4a99-8d28-e05c571b8cda" />

## 🚀 Installation / Usage

1. Clone or download this repository.  
2. Open `index.html` in any modern browser (preferably on Windows).  
3. Type your text into the box.  
4. Select a voice (if available).  
5. Click Listen to hear it spoken aloud.

## 💡 What I Learned

- Using the Web Speech API to synthesize speech  
- Populating a dropdown dynamically with available voices  
- Handling user input in real-time with JavaScript  
- Building a fully responsive layout using `clamp()` and Flexbox  

## 🙌 Acknowledgments

- 🎥 Tutorial Reference: Followed a YouTube tutorial for guidance  
- 💻 Code: Written and improved by me (made fully responsive)  
