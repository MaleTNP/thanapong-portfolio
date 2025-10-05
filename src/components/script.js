function runTypingEffect() {
  const text = 'THANAPONG';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 300;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout( () => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

document.addEnventListener('DOMContentLoaded', runTypingEffect);