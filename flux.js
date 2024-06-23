document.addEventListener("DOMContentLoaded", function() {
    const elementFilters = document.querySelectorAll('.element-filter');
    const elfilOutput = document.getElementById('elfilOutput');
    const numElementsFilter = document.getElementById('num-elements-filter');
    const numElementsValue = document.getElementById('num-elements-value');
    const monsterCardsContainer = document.getElementById('monster-cards-container');
    const noResultsMessage = document.getElementById('no-results-message');
    const theoryFilter = document.getElementById('theory-filter');
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

        if (theoryFilter.checked) {
            filteredMonsters = monsters.concat(theoryMonsters).filter(monster => {
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

                return elementMatch && numElementsMatch && isIslandMatch;
            });
        } else {
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
        }

        // Display filtered monsters or no results message
        if (filteredMonsters.length > 0) {
            displayMonsterCards(filteredMonsters);
            noResultsMessage.style.display = 'none';
        } else {
            monsterCardsContainer.innerHTML = '';
            noResultsMessage.style.display = 'block';
        }

        if (monsterCardsContainer.innerHTML == '') {
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
            var monsterIsland = monster.island;
            var monsterLikes = monster.likes;
            if (rarityFilter.value != "Common") {
                monsterClass = rarityFilter.value + " (" + monsterClass + ")";
                monsterName = rarityFilter.value + " " +monster.name;
                monsterLikes = "PLACEHOLDER"
                if (monster.island.includes("Colossingum")) {
                    monsterIsland = monsterIsland.replace(", Colossingum", "");
                }
                if (monster.island.includes("Tribal")) {
                    monsterIsland = monsterIsland.replace(", Tribal", "");
                }
                if (monster.island.includes("Composer")) {
                    monsterIsland = monsterIsland.replace(", Composer", "");
                }
            }
            const newMonsterCard = document.createElement('div');
            newMonsterCard.classList.add('monster-card');
            newMonsterCard.setAttribute('data-elements', monster.elements);
            newMonsterCard.setAttribute('data-num-elements', monster.elements.split(',').length); // Count number of 

            var monstIsles = monsterIsland.split(", ");

            if (((rarityFilter.value == "Rare" && rareList.includes(monster.name)) || (rarityFilter.value == "Epic" && epicList.includes(monster.name)) || rarityFilter.value == "Common") && (monstIsles.includes(islandFilter.value) || islandFilter.value == "Any")){
                newMonsterCard.innerHTML = `
                    <h2 class="monster-name">${monsterName}</h2>
                    <div class="monster-info">
                        <p><strong>Species:</strong> ${monster.name}</p>
                        <p><strong>Class:</strong> ${monsterClass}</p>
                        <p><strong>Elements:</strong> ${monster.elements}</p>
                        <p><strong>Islands:</strong> ${monsterIsland}</p>
                        <p><strong>Likes:</strong> ${monsterLikes}</p>
                        <img src='${monstImg}', alt=${monsterName}>
                    </div>
                `; 
                monsterCardsContainer.appendChild(newMonsterCard);
            }
            // <img src=${monster.image}, alt=${monster.name}>
        });
    }

    elementFilters.forEach(filter => filter.addEventListener('change', applyFilters));
    numElementsFilter.addEventListener('change', applyFilters);
    numElementsValue.addEventListener('change', applyFilters);
    theoryFilter.addEventListener('change', applyFilters);
    islandFilter.addEventListener('change', applyFilters);
    rarityFilter.addEventListener('change', applyFilters);

    // Initial filter application
    applyFilters();
});
