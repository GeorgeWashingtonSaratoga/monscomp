const monsters = [
    {
        name: "Potbelly",
        image: "https://static.wikia.nocookie.net/mysingingmonsters/images/e/e0/Potbelly.png/revision/latest/scale-to-width/360?cb=20230517222122",
        elements: "Plant",
        island: "Plant, Cold, Water, Earth, Haven, Light, Psychic, Shugabush, Tribal, Colossingum, Composer, Gold ",
        likes: "T-Rox, Congle, Reedling, Phangler, Spytrap, Shugarock, Eerie Remains, Wild Bagpipe, Bloofi Tree"
    },
    {
        name: "Mammott",
        image: "https://static.wikia.nocookie.net/mysingingmonsters/images/c/c6/Mammott.png/revision/latest?cb=20231101005110",
        elements: "Cold",
        island: "Plant, Cold, Air, Earth, Oasis, Light, Faerie, Shugabush, Tribal, Colossingum, Composer, Gold",
        likes: "Fwog, Entbrat, Quibble, Quarrister, Pluckbill, Stogg, Meldablend, Bottomless Pit, Stritch Skin"
    },
    {
        name: "Tweedle",
        image: "https://static.wikia.nocookie.net/mysingingmonsters/images/6/64/Entbrat_Portrait.png/revision/latest?cb=20140101162639",
        elements: "Air",
        island: "Cold, Air, Water, Earth, Haven, Oasis, Tribal, Colossingum, Composer, Gold",
        likes: "Bowgart, Cybop, Wynq, Reflecting Pool, Razzli Tree, Harpsitree"
    },
    {
        name: "Toe Jammer",
        elements: "Water",
        island: "Plant, Cold, Air, Water, Oasis, Psychic, Bone, Tribal, Colossingum, Composer, Gold",
        likes: "Furcorn, Pummel, Riff, Whaddle, Flowah, Uuduk, Directions to Nowhere, Wild Bagpipe, Hollow Log"
    },
    {
        name: "Noggin",
        elements: "Earth",
        island: "Plant, Air, Water, Earth, Haven, Faerie, Bone, Tribal, Colossingum, Composer, Gold",
        likes: "Drumpler, Shellbeat, Kayna, Travelers' Sign, Trumplite, Fire Bush"
    },
    {
        name: "Kayna",
        elements: "Fire",
        island: "Haven, Oasis, Light, Psychic, Faerie, Bone, Tribal, Amber",
        likes: "Floogull, Woolabee, TooToo, Oaktopus, Pladdie, Peckidna, Flum Ox, Edamimi, Directions to Nowhere, Dragoon Statue, Floofy Next"
    },
    {
        name: "Fluoress",
        elements: "Light",
        island: "Light, Sanctum, Nexus",
        likes: "Flowah, Frondley, Inverdigus Fern, Tree Forte Tower, Fuzzle Tree"
    },
    {
        name: "Theremind",
        elements: "Psychic",
        island: "Psychic, Sanctum, Nexus",
        likes: "Rooba, Fluoress, Flappy Flag, Wubbox Stockpile, Fossil-osaurus"
    },
    {
        name: "Floot Fly",
        elements: "Faerie",
        island: "Faerie, Sanctum, Nexus",
        likes: "Clavi Gnat, Knucklehead, Bass String Bridge, Zuffle Tree, Tree Hut"
    },
    {
        name: "Clackula",
        elements: "Bone",
        island: "Bone, Sanctum, Nexus",
        likes: "Denchuhs, Xyster, Castanevine, Wubbox Stockpile, Cozee Cabin"
    },
    {
        name: "Furcorn",
        elements: "Plant, Cold",
        island: "Plant, Cold, Earth, Light, Shugabush, Tribal, Colossingum, Composer, Gold",
        likes: "Toe Jammer, Thumpies, Boskus, Eerie Remains, Leafy Sea Dragon, Smunkin Patch"
    },
    {
        name: "Dandidoo",
        elements: "Plant, Air",
        island: "Cold, Water, Earth, Haven, Tribal, Colossingum, Composer, Gold",
        likes: "Spunge, PomPom, Glowl, Yum Yum Tree, Hollow Log, Spurrit Statue"
    },
    {
        name: "Oaktopus",
        elements: "Plant, Water",
        island: "Plant, Cold, Water, Psychic, Shugabush, Tribal, Colossingum, Composer, Gold",
        likes: "Fwog, Clamble, Thumpies, Rootitoot, Shugabass, Reflecting Pool, Trumplite, Spurrit Statue"
    },
    {
        name: "Shrubb",
        elements: "Plant, Earth",
        island: "Plant, Water, Earth, Haven, Tribal, Colossingum, Composer, Gold",
        likes: "Bowgart, Reedling, Fire Bush, Saggle Tree, Razzli Tree"
    },
    {
        name: "Flowah",
        elements: "Plant, Fire",
        island: "Haven, Light, Psychic, Amber",
        likes: "Barrb, Fluoress, Toe Jammer, Yelmut, PongPing, Bowhead, Tub Fountain, Bass String Bridge, Bottomless Pit"
    },
    {
        name: "Gob",
        elements: "Plant, Light",
        island: "Light, Nexus",
        likes: "Blow't, Fossil-osaurus, Ambered Thing, Mountain Morsel"
    },
    {
        name: "Bonkers",
        elements: "Plant, Psychic",
        island: "Psychic, Nexus",
        likes: "Yuggler, Thumpies Totem, Hollow Log, Ambered Thing"
    },
    {
        name: "Pango",
        elements: "Cold, Air",
        island: "Cold, Air, Earth, Oasis, Tribal, Colossingum, Composer, Gold",
        likes: "Maw, Clamble, Digger, Hollow Log, Babayag Tower"
    },
    {
        name: "Maw",
        elements: "Cold, Water",
        island: "Plant, Cold, Air, Oasis, Tribal, Colossingum, Composer, Gold",
        likes: "Pummel, Pango, Wild Bagpipe, Pipes of Cicado, Dragoon Statue"
    },
    {
        name: "Drumpler",
        elements: "Cold, Earth",
        island: "Plant, Air, Earth, Faerie, Tribal, Colossingum, Composer, Gold",
        likes: "Noggin, Eerie Remains, Stritch Skin, Smunkin Patch"
    },
    {
        name: "Boskus",
        elements: "Cold, Fire",
        island: "Oasis, Light, Faerie, Amber",
        likes: "Furcorn, Phangler, Bridg-it, Edamimi, Incisaur, Drummidary, Puffle Tree, Flappy Flag, Digger"
    },
    {
        name: "Bulbo",
        elements: "Cold, Light",
        island: "Light, Nexus",
        likes: "Kayna, Zuffle Tree, Thumpies Totem, Crumpler Tree"
    },
    {
        name: "Squot",
        elements: "Cold, Faerie",
        island: "Faerie, Nexus",
        likes: "Cantorell, Thumpies Totem, Reflecting Pool, Squeed Statue"
    },
    {
        name: "Quibble",
        elements: "Air, Water",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Cybop",
        elements: "Air, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Glowl",
        elements: "Air, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Fwog",
        elements: "Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Phangler",
        elements: "Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Poppette",
        elements: "Water, Psychic",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Denchuhs",
        elements: "Water, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Stogg",
        elements: "Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "HippityHop",
        elements: "Earth, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Peckidna",
        elements: "Earth, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Pluckbill",
        elements: "Fire, Light",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Yuggler",
        elements: "Fire, Psychic",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Wimmzies",
        elements: "Fire, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Hawlo",
        elements: "Fire, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Cahoot",
        elements: "Light, Psychic",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Knucklehead",
        elements: "Light, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Roarick",
        elements: "Light, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Déjà-Jin",
        elements: "Psychic, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Xyster",
        elements: "Psychic, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Osstax",
        elements: "Faerie, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Thumpies",
        elements: "Plant, Cold, Air",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Bowgart",
        elements: "Plant, Cold, Water",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Clamble",
        elements: "Plant, Cold, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Spunge",
        elements: "Plant, Air, Water",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Reedling",
        elements: "Plant, Air, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Pummel",
        elements: "Plant, Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Congle",
        elements: "Cold, Air, Water",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "PomPom",
        elements: "Cold, Air, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "T-Rox",
        elements: "Cold, Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Scups",
        elements: "Air, Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Sooza",
        elements: "Plant, Cold, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Barrb",
        elements: "Plant, Air, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Rootitoot",
        elements: "Plant, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Reptallio",
        elements: "Plant, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Woolabee",
        elements: "Cold, Air, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Wynq",
        elements: "Cold, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Ziggurab",
        elements: "Cold, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Whaddle",
        elements: "Air, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Floogull",
        elements: "Air, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Thrumble",
        elements: "Water, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Spytrap",
        elements: "Plant, Cold, Light",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "TooToo",
        elements: "Plant, Fire, Light",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Fiddlement",
        elements: "Cold, Fire, Light",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Tapricorn",
        elements: "Plant, Water, Psychic",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Rooba",
        elements: "Plant, Fire, Psychic",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Periscorp",
        elements: "Water, Fire, Psychic",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Cantorell",
        elements: "Cold, Earth, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Bridg-it",
        elements: "Earth, Fire, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Clavi Gnat",
        elements: "Cold, Fire, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Withur",
        elements: "Earth, Water, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Uuduk",
        elements: "Eartb, Fire, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Banjaw",
        elements: "Water, Fire, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "G'day",
        elements: "Light, Psychic, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Larvaluss",
        elements: "Psychic, Faerie, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Frondley",
        elements: "Light, Psychic, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Mushaboom",
        elements: "Light, Faerie, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Entbrat",
        elements: "Plant, Cold, Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Deedge",
        elements: "Plant, Cold, Air, Water",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Riff",
        elements: "Cold, Air, Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Shellbeat",
        elements: "Plant, Air, Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Quarrister",
        elements: "Plant, Cold, Air, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Yelmut",
        elements: "Plant, Cold, Air, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Incisaur",
        elements: "Plant, Cold, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Tiawa",
        elements: "Plant, Air, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "PongPing",
        elements: "Plant, Cold, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Edamimi",
        elements: "Plant, Water, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Bisonorus",
        elements: "Plant, Air, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Tring",
        elements: "Plant, Air, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Sneyser",
        elements: "Cold, Air, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Krillby",
        elements: "Cold, Air, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Flum Ox",
        elements: "Air, Water, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "B'lowt",
        elements: "Plant, Cold, Fire, Light",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Gloptic",
        elements: "Plant, Water, Fire, Psychic",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Pladdie",
        elements: "Cold, Earth, Fire, Faerie",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Plinkajou",
        elements: "Water, Earth, Fire, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Enchantling",
        elements: "Light, Psychic, Faerie, Bone",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Mimic",
        elements: "Plant, Cold, Air, Water, Earth",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Bowhead",
        elements: "Plant, Cold, Air, Water, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Drummidary",
        elements: "Plant, Cold, Air, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Gnarls",
        elements: "Plant, Cold, Water, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Candelavra",
        elements: "Plant, Air, Water, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    },
    {
        name: "Tusksi",
        elements: "Cold, Air, Water, Earth, Fire",
        island: "Gold",
        likes: "TEMP"
    }
];

const theoryMonsters = [
    {   
        name: "???",
        elements: "Air, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Water, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Earth, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Earth, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Water, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Air, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Water, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Earth, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Air, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Water, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Earth, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Water, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Earth, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Fire, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Water, Earth, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Water, Fire, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Earth, Fire, Light",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Cold, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Air, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Earth, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Air, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Water, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Earth, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Fire, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Water, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Earth, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Fire, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Water, Earth, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Earth, Fire, Psychic",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Cold, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Air, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Water, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Earth, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Fire, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Air, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Water, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Water, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Earth, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Fire, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Water, Earth, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Water, Fire, Faerie",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Cold, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Air, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Water, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Earth, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Plant, Fire, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Air, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Water, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Earth, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Cold, Fire, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Water, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Earth, Bone",
        island: "???",
        likes: "???"
    },
    {   
        name: "???",
        elements: "Air, Fire, Bone",
        island: "???",
        likes: "???"
    }
]

// Export the monsters array
if (typeof module !== 'undefined' && module.exports) {
    module.exports = monsters;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = theoryMonsters;
}
