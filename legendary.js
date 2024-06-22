document.addEventListener("DOMContentLoaded", function() {
    const elementFilters = document.querySelectorAll('.element-filter');
    const monsterCardsContainer = document.getElementById('monster-cards-container');
    const noResultsMessage = document.getElementById('no-results-message');
    const islandFilter = document.getElementById('islandFilter');

    function removeFunction(inputString) {
        return inputString.replace(/[^a-zA-Z0-9?]/g, '');
    }

    function applyFilters() {
        const selectedElements = Array.from(elementFilters)
            .filter(element => element.checked)
            .map(element => element.value);

        let filteredMonsters = [];

        filteredMonsters = monsters.filter(monster => {
            const cardElements = monster.elements.split(', ');
            const cardIslands = monster.island.split(', ');
            console.log(cardIslands);
            console.log(islandFilter.value);

            const elementMatch = selectedElements.every(element => cardElements.includes(element));
            const isIslandMatch = islandFilter.value == "Any" || cardIslands.includes(islandFilter.value);
            return elementMatch && isIslandMatch;
        });

        // Display filtered monsters or no results message
        if (filteredMonsters.length > 0) {
            displayMonsterCards(filteredMonsters);
            noResultsMessage.style.display = 'none';
        } else {
            monsterCardsContainer.innerHTML = '';
            noResultsMessage.style.display = 'block';
        }
    }

    function displayMonsterCards(monsters) {
        monsterCardsContainer.innerHTML = '';
        monsters.forEach(monster => {
            monsterClass = "";
            if (monster.name.includes("Shug")) {
                monsterClass = "Shugafam";
            } else {
                monsterClass = "Werdo";
            }
            if (monster.name.includes("???")) {
                monstImg = String("./monstImage/%3F%3F%3F.png")
            } else {
                monstImg = String("./monstImage/" + removeFunction(monster.name) + ".png")
            }
            const newMonsterCard = document.createElement('div');
            newMonsterCard.classList.add('monster-card');
            newMonsterCard.setAttribute('data-elements', monster.elements);
            newMonsterCard.setAttribute('data-num-elements', monster.elements.split(',').length); // Count number of elements
            newMonsterCard.innerHTML = `
                <h2 class="monster-name">${monster.name}</h2>
                <div class="monster-info">
                    <p><strong>Species:</strong> ${monster.name}</p>
                    <p><strong>Class:</strong> Legendary</p>
                    <p><strong>Sublass:</strong> ${monsterClass}</p>
                    <p><strong>Elements:</strong> ${monster.elements}</p>
                    <p><strong>Islands:</strong> ${monster.island}</p>
                    <p><strong>Likes:</strong> ${monster.likes}</p>
                    <img src='${monstImg}', alt=${monster.name}>
                </div>
            `; 
            // <img src=${monster.image}, alt=${monster.name}>
            monsterCardsContainer.appendChild(newMonsterCard);
        });
    }

    elementFilters.forEach(filter => filter.addEventListener('change', applyFilters));
    islandFilter.addEventListener('change', applyFilters);

    // Initial filter application
    applyFilters();
});
