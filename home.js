// Fetch quote on load
fetch('https://zenquotes.io/api/quotes/')
  .then(res => res.json())
  .then(data => {
    // Pick a random quote from the array
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex];
    document.getElementById('quote').innerText = `"${quote.q}" - ${quote.a}`;
  })
  .catch(() => {
    document.getElementById('quote').innerText = "Failed to load quote.";
  });

// Annyang setup
if (annyang) {
  const commands = {
    'hello': () => alert('Hello World'),
    'change the color to *color': (color) => {
      document.body.style.backgroundColor = color;
    },
    'navigate to *page': (page) => {
      const lowerPage = page.toLowerCase();
      if (lowerPage.includes("home")) window.location.href = "index.html";
      else if (lowerPage.includes("dogs")) window.location.href = "dogs.html";
      else if (lowerPage.includes("stocks")) window.location.href = "stocks.html";
    }
  };
  annyang.addCommands(commands);
}
