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

        if (monsterCardsContainer.innerHTML == '') {
            noResultsMessage.style.display = 'block';
        }
    }

    function displayMonsterCards(monsters) {
        monsterCardsContainer.innerHTML = '';
        monsters.forEach(monster => {
            var monsterClass = "";
            if (monster.elements.includes("Bone") || monster.elements.includes("Light") || monster.elements.includes("Psychic") || monster.elements.includes("Faerie")) {
                monsterClass = "Magical";
            } else if (monster.elements.includes("Fire")) {
                    monsterClass = "Fire";
            } else if (monster.elements.includes("Plant") || monster.elements.includes("Cold") || monster.elements.includes("Air") || monster.elements.includes("Water") || monster.elements.includes("Earth")) {
                monsterClass = "Natural";
            } else if (monster.elements.includes("Plasma") || monster.elements.includes("Shadow") || monster.elements.includes("Mech") || monster.elements.includes("Crystal") || monster.elements.includes("Poison")) {
                monsterClass = "Ethereal";
            } else if (monster.elements.includes("Control")) {
                monsterClass = "Paironormal";
            } else if (monster.elements.includes("Titansoul")) {
                monsterClass = "Titansoul";
            } else if (monster.elements.includes("Legendary")) {
                monsterClass = "Legendary";
            } else if (monster.elements.includes("Mythical") || monster.elements.includes("Dreamythical")) {
                monsterClass = "Mythical";
            } else if (monster.elements.includes("Dipster")) {
                monsterClass = "Dipster";
            } else if (monster.elements.includes("Celestial")) {
                monsterClass = "Celestial";
            } else if (monster.elements.includes("Supernatural")) {
                monsterClass = "Supernatural";
            } else if (monster.elements.includes("Anniversary Month")) {
                monsterClass = "Seasonal";
            } else if (monster.elements.includes("Spooktacle") || monster.elements.includes("Festival of Yay") || monster.elements.includes("Season of Love") || monster.elements.includes("Eggs-Travaganza") || monster.elements.includes("SummerSong")) {
                monsterClass = "Core Seasonal";
            } else {
                monsterClass = "Aux. Seasonal";
            }

            var monsterSubClass = "";
            if (monsterClass == "Mythical" && monster.elements.includes("Dreamythical")) {
                monsterSubClass = "Dreamythical";
            } else if (monsterClass == "Seasonal" || monsterClass == "Core Seasonal" || monsterClass == "Aux. Seasonal") {
                monsterSubClass = monster.elements;
            } else if (monsterClass == "Legendary" && monster.name.includes("Shuga")) {
                monsterSubClass = "Shugafam";
            } else if (monsterClass == "Legendary") {
                monsterSubClass = "Werdo";
            } else {
                monsterSubClass = "";
            }

            if (monster.name.includes("???")) {
                monstImg = String("./monstImage/%3F%3F%3F.png")
            } else if (rarityFilter.value == "Common") {
                monstImg = String("./monstImage/" + removeFunction(monster.name) + ".png")
            } else if (rarityFilter.value == "Rare" && monsterClass == "Celestial") {
                monstImg = String("./rareMonstImage/" + removeFunction(monster.name) + " (adult).png")
            } else if (rarityFilter.value == "Epic" && monsterClass == "Celestial") {
                monstImg = String("./epicMonstImage/" + removeFunction(monster.name) + " (elder).png")
            }else if (rarityFilter.value == "Rare") {
                monstImg = String("./rareMonstImage/Rare " + removeFunction(monster.name) + ".png")
            } else if (rarityFilter.value == "Epic") {
                monstImg = String("./epicMonstImage/Epic " + removeFunction(monster.name) + ".png")
            }

            var monsterName = monster.name;
            var monsterIsland = monster.island;
            var monsterLikes = monster.likes;

            if (rarityFilter.value != "Common") {
                if (monsterClass == "Celestial") {
                    var age = ""
                    if (rarityFilter.value == "Rare") {
                        age = "Adult"
                    } else {
                        age = "Elder"
                    }
                    monsterClass = monsterClass + " (" + age.toLowerCase() + ")";
                    monsterName = age + " " + monster.name;
                } else if (monsterClass != "Celestial") {
                    monsterClass = rarityFilter.value + " (" + monsterClass + ")";
                    monsterName = rarityFilter.value + " " + monster.name;
                }
                
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
                if (monster.name == "Wubbox" && rarityFilter.value == "Rare") {

                    monsterIsland = monsterIsland.replace(",", ",");
                } else if (monster.name == "Wubbox" && rarityFilter.value == "Epic") {

                    monsterIsland = monsterIsland.replace(", Ethereal, Wublin", "");
                }
            }

            var monstIsles = monsterIsland.split(", ");

            if (((rarityFilter.value == "Rare" && rareList.includes(monster.name)) || (rarityFilter.value == "Epic" && epicList.includes(monster.name)) || rarityFilter.value == "Common") && (monstIsles.includes(islandFilter.value) || islandFilter.value == "Any")){
                
                const newMonsterCard = document.createElement('div');
                newMonsterCard.classList.add('monster-card');
                newMonsterCard.setAttribute('data-elements', monster.elements);
                newMonsterCard.setAttribute('data-num-elements', monster.elements.split(',').length);

                if (monsterClass == "Paironormal"){
                    if (rarityFilter.value == "Epic") {
                        monstImgMajor = './epicMonstImage/' + monster.name + ' (Major).png';
                        monstImgMinor = './epicMonstImage/' + monster.name + ' (Minor).png';
                    } else if (rarityFilter.value == "Rare") {
                        monstImgMajor = './rareMonstImage/' + monster.name + ' (Major).png';
                        monstImgMinor = './rareMonstImage/' + monster.name + ' (Minor).png';
                    } else {
                        monstImgMajor = './monstImage/' + monster.name + ' (Major).png';
                        monstImgMinor = './monstImage/' + monster.name + ' (Minor).png';
                    }
                    newMonsterCard.innerHTML = `
                    <h2 class="monster-name">${monsterName}</h2>
                    <div class="monster-info">
                        <p><strong>Species:</strong> ${monster.name}</p>
                        <p><strong>Class:</strong> ${monsterClass}</p>
                        <p><strong>Elements:</strong> ${monster.elements}</p>
                        <p><strong>Islands:</strong> ${monsterIsland}</p>
                        <p><strong>Likes:</strong> ${monsterLikes}</p>
                        <img src='${monstImgMajor}', alt='${monster.name} (Major)'>
                        <img src='${monstImgMinor}', alt='${monster.name} (Minor)'>
                    </div>
                `;
                } else if (monster.name == "Wubbox" && rarityFilter.value == "Epic"){
                    if (islandFilter.value == "Plant") {
                        monstImg = "./epicMonstImage/Epic Wubbox Plant.png";
                    } else if (islandFilter.value == "Cold") {
                        monstImg = "./epicMonstImage/Epic Wubbox Cold.png";
                    } else if (islandFilter.value == "Air") {
                        monstImg = "./epicMonstImage/Epic Wubbox Air.png";
                    } else if (islandFilter.value == "Water") {
                        monstImg = "./epicMonstImage/Epic Wubbox Water.png";
                    } else if (islandFilter.value == "Earth") {
                        monstImg = "./epicMonstImage/Epic Wubbox Earth.png";
                    } else if (islandFilter.value == "Haven") {
                        monstImg = "./epicMonstImage/Epic Wubbox Haven.png";
                    } else if (islandFilter.value == "Oasis") {
                        monstImg = "./epicMonstImage/Epic Wubbox Oasis.png";
                    } else {
                        monstImg = "./epicMonstImage/Epic Wubbox Gold.png";
                    }
                    newMonsterCard.innerHTML = `
                    <h2 class="monster-name">${monsterName}</h2>
                    <div class="monster-info">
                        <p><strong>Species:</strong> ${monster.name}</p>
                        <p><strong>Class:</strong> ${monsterClass}</p>
                        <p><strong>Elements:</strong> ${monster.elements}</p>
                        <p><strong>Islands:</strong> ${monsterIsland}</p>
                        <p><strong>Likes:</strong> ${monsterLikes}</p>
                        <img src='${monstImg}', alt=${monster.name}>
                    </div>
                `; 
                } else if (monsterSubClass == "") {
                    newMonsterCard.innerHTML = `
                    <h2 class="monster-name">${monsterName}</h2>
                    <div class="monster-info">
                        <p><strong>Species:</strong> ${monster.name}</p>
                        <p><strong>Class:</strong> ${monsterClass}</p>
                        <p><strong>Elements:</strong> ${monster.elements}</p>
                        <p><strong>Islands:</strong> ${monsterIsland}</p>
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
                        <p><strong>Subclass:</strong> ${monsterSubClass}</p>
                        <p><strong>Elements:</strong> ${monster.elements}</p>
                        <p><strong>Islands:</strong> ${monsterIsland}</p>
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
