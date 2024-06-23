document.addEventListener("DOMContentLoaded", function() {
    const elementFilters = document.querySelectorAll('.element-filter');
    const elfilOutput = document.getElementById('elfilOutput');
    const numElementsFilter = document.getElementById('num-elements-filter');
    const numElementsValue = document.getElementById('num-elements-value');
    const monsterCardsContainer = document.getElementById('monster-cards-container');
    const noResultsMessage = document.getElementById('no-results-message');
    const islandFilter = document.getElementById('islandFilter');
    const rarityFilter = document.getElementById('rarityFilter');

    function removeFunction(inputString) {
        return inputString.replace(/[^a-zA-Z0-9?]/g, '');
    }

    function applyFilters() {
        const selectedElements = Array.from(elementFilters)
            .filter(element => element.checked)
            .map(element => element.value);
        const selectedNumElements = numElementsValue.value;
        const selectedNumFilter = numElementsFilter.value;

        elfilOutput.textContent = ""

        for (let i = 0; i < Array.from(elementFilters).length; i++) {
            if (i == 0 && selectedElements[i] != undefined) {
                elfilOutput.textContent += selectedElements[0];
            } else if (selectedElements[i] != undefined){
                elfilOutput.textContent += (", " + selectedElements[i]);
            }
        }

        let filteredMonsters = [];

        filteredMonsters = monsters.filter(monster => {
            const cardElements = monster.elements.split(', ');
            const cardIslands = monster.island.split(', ');
            const cardNumElements = cardElements.length;

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
            monsterClass = "Mythical";
            if (monster.name.includes("???")) {
                monstImg = String("./monstImage/%3F%3F%3F.png")
            } else if (rarityFilter.value == "Common") {
                monstImg = String("./monstImage/" + removeFunction(monster.name) + ".png")
            }  else if (rarityFilter.value == "Rare") {
                monstImg = String("./rareMonstImage/Rare " + removeFunction(monster.name) + ".png")
            } else if (rarityFilter.value == "Epic") {
                monstImg = String("./epicMonstImage/Epic " + removeFunction(monster.name) + ".png")
            }
            var monsterName = monster.name;
            var monsterLikes = monster.likes;
            if (rarityFilter.value != "Common") {
                monsterClass = rarityFilter.value + " (" + monsterClass + ")";
                monsterName = rarityFilter.value + " " +monster.name;
                monsterLikes = "PLACEHOLDER"
            }
            const newMonsterCard = document.createElement('div');
            newMonsterCard.classList.add('monster-card');
            newMonsterCard.setAttribute('data-elements', monster.elements);
            newMonsterCard.setAttribute('data-num-elements', monster.elements.split(',').length); // Count number of elements
            if ((rarityFilter.value == "Rare" && rareList.includes(monster.name)) || (rarityFilter.value == "Epic" && epicList.includes(monster.name)) || rarityFilter.value == "Common"){
                if (monster.elements.includes("Dreamythical")) {
                    newMonsterCard.innerHTML = `
                    <h2 class="monster-name">${monsterName}</h2>
                    <div class="monster-info">
                        <p><strong>Species:</strong> ${monster.name}</p>
                        <p><strong>Class:</strong> ${monsterClass}</p>
                        <p><strong>Subclass:</strong> Dreamythical</p>
                        <p><strong>Elements:</strong> ${monster.elements}</p>
                        <p><strong>Islands:</strong> ${monster.island}</p>
                        <p><strong>Likes:</strong> ${monsterLikes}</p>
                        <img src='${monstImg}', alt=${monster.name}>
                    </div>
                    `; 
                } else {
                    newMonsterCard.innerHTML = `
                    <h2 class="monster-name">${monsterName}</h2>
                    <div class="monster-info">
                        <p><strong>Species:</strong> ${monster.name}</p>
                        <p><strong>Class:</strong> ${monsterClass}</p>
                        <p><strong>Elements:</strong> ${monster.elements}</p>
                        <p><strong>Islands:</strong> ${monster.island}</p>
                        <p><strong>Likes:</strong> ${monsterLikes}</p>
                        <img src='${monstImg}', alt=${monster.name}>
                    </div>
                    `; 
                }
                monsterCardsContainer.appendChild(newMonsterCard);
            }
        });
    }

    elementFilters.forEach(filter => filter.addEventListener('change', applyFilters));
    numElementsFilter.addEventListener('change', applyFilters);
    numElementsValue.addEventListener('change', applyFilters);
    islandFilter.addEventListener('change', applyFilters);
    rarityFilter.addEventListener('change', applyFilters);

    // Initial filter application
    applyFilters();
});
