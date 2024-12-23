const quotes = [
    "Imagination is the only limit.",
    "Art is the key to freedom.",
    "Stay curious, stay creative.",
    "Life is short, make it colorful.",
    "Happiness is created with your own hands.",
    "Let your creativity flow.",
    "Inspiration is everywhere.",
    "The best way to predict the future is to create it.",
    "Creativity is intelligence having fun.",
    "Every great idea starts with a small spark."
  ];
    const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.addEventListener('mouseenter', () => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      box.setAttribute('data-text', randomQuote); 
    });
  });
  