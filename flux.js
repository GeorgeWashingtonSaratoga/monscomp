document.addEventListener("DOMContentLoaded", function() {
    const elementFilters = document.querySelectorAll('.element-filter');
    const numElementsFilter = document.getElementById('num-elements-filter');
    const numElementsValue = document.getElementById('num-elements-value');
    const monsterCardsContainer = document.getElementById('monster-cards-container');
    const noResultsMessage = document.getElementById('no-results-message');
    const theoryFilter = document.getElementById('theory-filter');
    const islandFilter = document.getElementById('islandFilter');

    function applyFilters() {
        const selectedElements = Array.from(elementFilters)
            .filter(element => element.checked)
            .map(element => element.value);
        const selectedNumElements = numElementsValue.value;
        const selectedNumFilter = numElementsFilter.value;

        let filteredMonsters = [];

        if (theoryFilter.checked) {
            filteredMonsters = monsters.concat(theoryMonsters).filter(monster => {
                const cardElements = monster.elements.split(', ');
                const cardIslands = monster.island.split(', ');
                const cardNumElements = cardElements.length;
                console.log(cardIslands);
                console.log(islandFilter);

                const elementMatch = selectedElements.every(element => cardElements.includes(element));
                const isIslandMatch = islandFilter.value == "Any" || cardIslands.includes(islandFilter.value);
                let numElementsMatch;
                switch(selectedNumFilter) {
                    case '=':
                        numElementsMatch = cardNumElements === parseInt(selectedNumElements);
                        break;
                    case '<':
                        numElementsMatch = cardNumElements < parseInt(selectedNumElements);
                        break;
                    case '>':
                        numElementsMatch = cardNumElements > parseInt(selectedNumElements);
                        break;
                    default:
                        numElementsMatch = true;
                        break;
                }

                return elementMatch && numElementsMatch && isIslandMatch;
            });
        } else {
            filteredMonsters = monsters.filter(monster => {
                const cardElements = monster.elements.split(', ');
                const cardIslands = monster.island.split(', ');
                const cardNumElements = cardElements.length;
                console.log(cardIslands);
                console.log(islandFilter.value);

                const elementMatch = selectedElements.every(element => cardElements.includes(element));
                const isIslandMatch = islandFilter.value == "Any" || cardIslands.includes(islandFilter.value);
                let numElementsMatch;
                switch(selectedNumFilter) {
                    case '=':
                        numElementsMatch = cardNumElements === parseInt(selectedNumElements);
                        break;
                    case '<':
                        numElementsMatch = cardNumElements < parseInt(selectedNumElements);
                        break;
                    case '>':
                        numElementsMatch = cardNumElements > parseInt(selectedNumElements);
                        break;
                    default:
                        numElementsMatch = true;
                        break;
                }

                return elementMatch && numElementsMatch&& isIslandMatch;
            });
        }

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
            if (monster.elements.includes("Fire")) {
                monsterClass = "Fire";
            } else if (monster.elements.includes("Bone") || monster.elements.includes("Light") || monster.elements.includes("Psychic") || monster.elements.includes("Faerie")) {
                monsterClass = "Magical";
            } else {
                monsterClass = "Natural";
            }
            monstImg = String("./monstImage/" + monster.name.toLowerCase() + ".png")
            const newMonsterCard = document.createElement('div');
            newMonsterCard.classList.add('monster-card');
            newMonsterCard.setAttribute('data-elements', monster.elements);
            newMonsterCard.setAttribute('data-num-elements', monster.elements.split(',').length); // Count number of elements
            newMonsterCard.innerHTML = `
                <h2 class="monster-name">${monster.name}</h2>
                <div class="monster-info">
                    <p><strong>Species:</strong> ${monster.name}</p>
                    <p><strong>Class:</strong> ${monsterClass}</p>
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
    numElementsFilter.addEventListener('change', applyFilters);
    numElementsValue.addEventListener('change', applyFilters);
    theoryFilter.addEventListener('change', applyFilters);
    islandFilter.addEventListener('change', applyFilters);

    // Initial filter application
    applyFilters();
});
