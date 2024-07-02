
// Function to generate the links
function generateBioLinks() {
  const bioDiv = document.getElementById('bioDiv');
  
  bioEntries.forEach(entry => {
    const a = document.createElement('a');
    a.href = `#`;
    a.textContent = entry.name;
    a.dataset.id = entry.id;
    a.addEventListener('click', handleBioClick);
    bioDiv.appendChild(a);
    bioDiv.appendChild(document.createElement('br')); // Add line break for better readability
  });
}

// Function to handle the click event
function handleBioClick(event) {
  event.preventDefault();
  const id = event.target.dataset.id;
  const entry = bioEntries.find(entry => entry.id === parseInt(id));

  if (entry) {
    generateBioPage(entry);
  } else {
    console.error('Bio entry not found');
  }
}

// Function to generate a new HTML page with the bio information
function generateBioPage(entry) {
    const paragraphs = entry.content.split('\n \t');
    const paragraphHtml = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');

  const bioPage = `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${entry.header}</title>
        <link href = "flux.css", rel = "stylesheet">
        <link id = "icon", rel = "icon", href = "webIcon.png">
      </head>
      <body>
        <h1>My Singing Monsters Compendium: Monster Biology</h1>
        <h2>${entry.header}</h2>
        <div id = "no-results-message">
            ${paragraphHtml}
        </div>
      </body>
    </html>
  `;

  // Create a new window and write the bio page HTML to it
  const bioWindow = window.open('', '_blank');
  bioWindow.document.write(bioPage);
  bioWindow.document.close();
}

// Call the function to generate the bio links when the window loads
window.onload = generateBioLinks;
