const famDiv = document.getElementById('famDiv');

function removeFunction(inputString) {
    return inputString.replace(/[^a-zA-Z0-9?]/g, '');
}



function generateFamPage() {
    for (family in famEntries) {
        console.log(famEntries[family]);

        const famCard = document.createElement('div');
        famCard.classList.add('monster-card');
        famImg = String("./familyPhotos/" + removeFunction(famEntries[family].name) + ".png")

        famCard.innerHTML = `
                <div>
                    <h2>${famEntries[family].name}</h2>
                    <p>Islands featured on: ${famEntries[family].islands}</p>
                    <p>Members: ${famEntries[family].content}</p>
                    <img src = "${famImg}", alt = "${famEntries[family].name}">
                </div>
        `;
        famDiv.appendChild(famCard);
    }
}

window.onload = generateFamPage;