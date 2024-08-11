const monsters = [
    {
        name: "Potbelly",
        image: "potbelly.png",
        elements: "Plant",
        island: "Plant, Cold, Water, Earth, Haven, Light, Psychic, Shugabush, Tribal, Colossingum, Composer, Gold ",
        likes: "T-Rox, Congle, Reedling, Phangler, Spytrap, Shugarock, Eerie Remains, Wild Bagpipe, Bloofi Tree",
        rlikes: "PLACEHOLDER",
        risland:"Plant, Cold, Water, Earth, Haven, Light, Psychic, Shugabush, Gold "
    },
    {
        name: "Mammott",
        image: "https://static.wikia.nocookie.net/mysingingmonsters/images/c/c6/Mammott.png/revision/latest?cb=20231101005110",
        elements: "Cold",
        island: "Plant, Cold, Air, Earth, Oasis, Light, Faerie, Shugabush, Tribal, Colossingum, Composer, Gold",
        likes: "Fwog, Entbrat, Quibble, Quarrister, Pluckbill, Stogg, Meldablend, Bottomless Pit, Stritch Skin",
        rlikes: "PLACEHOLDER",
        risland: "Plant, Cold, Air, Earth, Oasis, Light, Faerie, Shugabush, Tribal, Colossingum, Composer, Gold"
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
        island: "Cold, Air, Water, Oasis, Shugabush, Tribal, Colossingum, Composer, Gold",
        likes: "Mammott, Scups, Fossil-osaurus, Trumplite, Castanevine"
    },
    {
        name: "Cybop",
        elements: "Air, Earth",
        island: "Air, Water, Earth, Haven, Tribal, Colossingum, Composer, Gold",
        likes: "Tweedle, Cozee Cabin, Toob, Razzli Tree"
    },
    {
        name: "Glowl",
        elements: "Air, Fire",
        island: "Haven, Oasis, Amber",
        likes: "Dandidoo, Sneyser, Ziggurab, Rootitoot, Drummidary, Dragon Tower, Smunkin Patch, Tree Hut"
    },
    {
        name: "Fwog",
        elements: "Water, Earth",
        island: "Plant, Air, Water, Bone, Tribal, Colossingum, Composer, Gold",
        likes: "Mammott, Oaktopus, PomPom, Banjaw, Reflecting Pool, Fire Bush, Spurrit Statue"
    },
    {
        name: "Phangler",
        elements: "Water, Fire",
        island: "Oasis, Psychic, Bone, Amber",
        likes: "Congle, Potbelly, Thrumble, Ziggurab, Sooza, Krillby, Candelavra, Leafy Sea Dragon, Squeed Statue, Bass String Bass"
    },
    {
        name: "Poppette",
        elements: "Water, Psychic",
        island: "Psychic, Nexus",
        likes: "Periscorp, Mountain Morsel, Yum Yum Tree, Barbloo Statue"
    },
    {
        name: "Denchuhs",
        elements: "Water, Bone",
        island: "Bone, Nexus",
        likes: "Plinkajou, Fuzzle Tree, Jarhead, Saggle Tree"
    },
    {
        name: "Stogg",
        elements: "Earth, Fire",
        island: "Haven, Faerie, Bone, Amber",
        likes: "Tring, Mammott, Withur, Yelmut, Drummidary, Gnarls, Stritch Skin, Digger, Eerie Remains"
    },
    {
        name: "HippityHop",
        elements: "Earth, Faerie",
        island: "Faerie, Nexus",
        likes: "Ziggurab, Bottomless Pit, Fossil-osaurus, Jarhead"
    },
    {
        name: "Peckidna",
        elements: "Earth, Bone",
        island: "Bone, Nexus",
        likes: "Hawlo, Toob, Mountain Morsel, Barbloo Statue"
    },
    {
        name: "Pluckbill",
        elements: "Fire, Light",
        island: "Light, Nexus",
        likes: "Mammott, Mountain Morsel, Harpsitree, Saggle Tree"
    },
    {
        name: "Yuggler",
        elements: "Fire, Psychic",
        island: "Psychic, Nexus",
        likes: "Bonkers, Floofy Nest, Wubbox Stockpile, Digger"
    },
    {
        name: "Wimmzies",
        elements: "Fire, Faerie",
        island: "Faerie, Nexus",
        likes: "Kayna, Jarhead, Leafy Sea Dragon, Cozee Cabin"
    },
    {
        name: "Hawlo",
        elements: "Fire, Bone",
        island: "Bone, Nexus",
        likes: "Noggin, Piney Tree, Thumpies Totem, Flappy Flag"
    },
    {
        name: "Cahoot",
        elements: "Light, Psychic",
        island: "Sanctum",
        likes: "Mushaboom, Thumpies Totem, Digger, Spurrit Statue"
    },
    {
        name: "Knucklehead",
        elements: "Light, Faerie",
        island: "Sanctum",
        likes: "Floot Fly, Piney Tree, Thumpies Totem, Dragoon Statue"
    },
    {
        name: "Roarick",
        elements: "Light, Bone",
        island: "Sanctum",
        likes: "Enchantling, Wubbox Stockpile, Puffle Tree, Leafy Sea Dragon"
    },
    {
        name: "Déjà-Jin",
        elements: "Psychic, Faerie",
        island: "Sanctum",
        likes: "Larvaluss, Mountain Morsel, Bottomless Pit, Reflecting Pool"
    },
    {
        name: "Xyster",
        elements: "Psychic, Bone",
        island: "Sanctum",
        likes: "Clackula, Eerie Remains, Jarhead, Guitree"
    },
    {
        name: "Osstax",
        elements: "Faerie, Bone",
        island: "Sanctum",
        likes: "G'day, Thumpies Totem, Wild Bagpipe, Hollow Log"
    },
    {
        name: "Thumpies",
        elements: "Plant, Cold, Air",
        island: "Cold, Earth, Tribal, Colossingum, Composer, Gold",
        likes: "Furcorn, Oaktopus, Cozee Cabin, Fuzzle Tree, Dragoon Statue"
    },
    {
        name: "Bowgart",
        elements: "Plant, Cold, Water",
        island: "Plant, Cold, Tribal, Colossingum, Composer, Gold",
        likes: "Shrubb, Tweedle, Travelers' Sign, Toob, Eerie Remains"
    },
    {
        name: "Clamble",
        elements: "Plant, Cold, Earth",
        island: "Plant, Earth, Tribal, Colossingum, Composer, Gold",
        likes: "Oaktopus, Pango, Digger, Toob, Barbloo Statue"
    },
    {
        name: "Spunge",
        elements: "Plant, Air, Water",
        island: "Cold, Water, Tribal, Colossingum, Composer, Gold",
        likes: "Dandidoo, Stritch Skin, Barbloo Statue, Bloofi Tree"
    },
    {
        name: "Reedling",
        elements: "Plant, Air, Earth",
        island: "Water, Earth, Tribal, Colossingum, Composer, Gold",
        likes: "Potbelly, Shrubb, Beeyoot Tree, Pipes of Cicado, Squeed Statue"
    },
    {
        name: "Pummel",
        elements: "Plant, Water, Earth",
        island: "Plant, Water, Tribal, Colossingum, Composer, Gold",
        likes: "Toe Jammer, Maw, Fossil-osaurus, Flappy Flag, Fuzzle Tree"
    },
    {
        name: "Congle",
        elements: "Cold, Air, Water",
        island: "Cold, Air, Tribal, Colossingum, Composer, Gold",
        likes: "Potbelly, T-Rox, Boskus, Fossil-osaurus, Guitree, Meldablend"
    },
    {
        name: "PomPom",
        elements: "Cold, Air, Earth",
        island: "Air, Earth, Shugabush, Tribal, Colossingum, Composer, Gold",
        likes: "Fwog, Dandidoo, Shugarock, Directions to Nowhere, Bottomless Pit, Toob"
    },
    {
        name: "T-Rox",
        elements: "Cold, Water, Earth",
        island: "Plant, Air, Tribal, Colossingum, Composer, Gold",
        likes: "Potbelly, Congle, Piney Tree, Bloofi Tree, Dragoon Statue"
    },
    {
        name: "Scups",
        elements: "Air, Water, Earth",
        island: "Air, Water, Tribal, Colossingum, Composer, Gold",
        likes: "Quibble, Harpsitree, Castanevine, Dragon Tower"
    },
    {
        name: "Sooza",
        elements: "Plant, Cold, Fire",
        island: "Light, Amber",
        likes: "Fiddlement, Flum Ox, Krillby, Rootitoot, Tuskski, Toob, Trumblite, Reflecting Pool"
    },
    {
        name: "Barrb",
        elements: "Plant, Air, Fire",
        island: "Haven, Amber",
        likes: "Flowah, Boskus, Sneyser, Gnarls, Barbloo Statue, Crumpler Tree, Puffle Tree"
    },
    {
        name: "Rootitoot",
        elements: "Plant, Water, Fire",
        island: "Psychic, Amber",
        likes: "Kayna, Floogull, Ziggurab, Krillby, Babayag Tower, Toob, Piney Tree"
    },
    {
        name: "Repatillo",
        elements: "Plant, Earth, Fire",
        island: "Haven, Amber",
        likes: "Kayna, Thrumble, PongPing, Tiawa, Castanevine, Dragon Tower, Leafy Sea Dragon"
    },
    {
        name: "Woolabee",
        elements: "Cold, Air, Fire",
        island: "Oasis, Amber",
        likes: "Toe Jammer, Stogg, Rootitoot, Bisonorus, Gnarls, Eerie Remains, Spurrit Statue, Fuzzle Tree"
    },
    {
        name: "Wynq",
        elements: "Cold, Water, Fire",
        island: "Oasis, Amber",
        likes: "Tweedle, Krillby, Barrb, Candelavra, Rootitoot, Ambered Thing, Piney Tree, Bloofi Tree"
    },
    {
        name: "Ziggurab",
        elements: "Cold, Earth, Fire",
        island: "Faerie, Amber",
        likes: "HippityHop, Glowl, Candelavra, Wynq, Bisonorus, Yum Yum Tree, Hollow Log, Tree Forte Tower"
    },
    {
        name: "Whaddle",
        elements: "Air, Water, Fire",
        island: "Oasis, Amber",
        likes: "Kayna, Sooza, Barrb, Bowhead, Beeyoot Tree, Yum Yum Tree, Cozee Cabin"
    },
    {
        name: "Floogull",
        elements: "Air, Earth, Fire",
        island: "Haven, Amber",
        likes: "Repatillo, Yelmut, Thrumble, Incisaur, Tree Forte Tower, Bloofi Tree, Fossil-osaurus"
    },
    {
        name: "Thrumble",
        elements: "Water, Earth, Fire",
        island: "Bone, Amber",
        likes: "Phangler, Sooza, Bisonorus, Gnarls, Tub Fountain, Bottomless Pit, Dragon Tower"
    },
    {
        name: "Spytrap",
        elements: "Plant, Cold, Light",
        island: "Light, Nexus",
        likes: "Potbelly, Squeed Statue, Inverdigus Fern, Castanevine"
    },
    {
        name: "TooToo",
        elements: "Plant, Fire, Light",
        island: "Light, Nexus",
        likes: "Bulbo, Babayag Tower, Wubbox Stockpile, Fire Bush"
    },
    {
        name: "Fiddlement",
        elements: "Cold, Fire, Light",
        island: "Light, Nexus",
        likes: "Sooza, Jarhead, Travelers' Sign, Piney Tree"
    },
    {
        name: "Tapricorn",
        elements: "Plant, Water, Psychic",
        island: "Psychic, Nexus",
        likes: "Theremind, Castanevine, Thumpies Totem, Guitree"
    },
    {
        name: "Rooba",
        elements: "Plant, Fire, Psychic",
        island: "Psychic, Nexus",
        likes: "Gloptic, Inverdigus Fern, Puffle Tree, Crumpler Tree"
    },
    {
        name: "Periscorp",
        elements: "Water, Fire, Psychic",
        island: "Psychic, Nexus",
        likes: "Poppette, Inverdigus Fern, Dragon Tower, Pipes of Cicado"
    },
    {
        name: "Cantorell",
        elements: "Cold, Earth, Faerie",
        island: "Faerie, Nexus",
        likes: "Squot, Tree Hut, Inverdigus Fern"
    },
    {
        name: "Bridg-it",
        elements: "Earth, Fire, Faerie",
        island: "Faerie, Nexus",
        likes: "Boskus, Mountain Morsel, Harpsitree, Ambered Thing"
    },
    {
        name: "Clavi Gnat",
        elements: "Cold, Fire, Faerie",
        island: "Faerie, Nexus",
        likes: "Floot Fly, Pipes of Cicado, Inverdigus Fern, Dragon Tower"
    },
    {
        name: "Withur",
        elements: "Earth, Water, Bone",
        island: "Bone, Nexus",
        likes: "Stogg, Fossil-osaurus, Mountain Morsel, Eerie Remains"
    },
    {
        name: "Uuduk",
        elements: "Eartb, Fire, Bone",
        island: "Bone, Nexus",
        likes: "Toe Jammer, Pipes of Cicado, Wubbox Stockpile, Babayag Tower"
    },
    {
        name: "Banjaw",
        elements: "Water, Fire, Bone",
        island: "Bone, Nexus",
        likes: "Fwog, Harpsitree, Inverdigus Fern, Meldablend"
    },
    {
        name: "G'day",
        elements: "Light, Psychic, Bone",
        island: "Sanctum",
        likes: "Osstax, Mountain Morsel, Thumpies TOtem, Inverdigus Fern"
    },
    {
        name: "Larvaluss",
        elements: "Psychic, Faerie, Bone",
        island: "Sanctum",
        likes: "Déjà-Jin, Harpsitree, Jarhead, Barbloo Statue"
    },
    {
        name: "Frondley",
        elements: "Light, Psychic, Faerie",
        island: "Sanctum",
        likes: "Theremind, Beeyoot Tree, Mountain Morsel, Saggle Tree"
    },
    {
        name: "Mushaboom",
        elements: "Light, Faerie, Bone",
        island: "Sanctum",
        likes: "Cahoot, Inverdigus Fern, Smunkin Patch, Crumpler Tree"
    },
    {
        name: "Entbrat",
        elements: "Plant, Cold, Water, Earth",
        island: "Plant, Tribal, Colossingum, Composer, Gold",
        likes: "Mammott, Flappy Flag, Guitree, Babayag Tower, "
    },
    {
        name: "Deedge",
        elements: "Plant, Cold, Air, Water",
        island: "Cold, Shugabush, Tribal, Colossingum, Composer, Gold",
        likes: "Shugabuzz, Leafy Sea Dragon, Zuffle Tree, Piney Tree, Squeed Statue"
    },
    {
        name: "Riff",
        elements: "Cold, Air, Water, Earth",
        island: "Air, Tribal, Colossingum, Composer, Gold",
        likes: "Toe Jammer, Bass String Bridge, Leafy Sea Dragon, Crumpler Tree"
    },
    {
        name: "Shellbeat",
        elements: "Plant, Air, Water, Earth",
        island: "Water, Tribal, Colossingum, Composer, Gold",
        likes: "Noggin, Yum YUm Tree, Puffle Tree, Dragon Tower"
    },
    {
        name: "Quarrister",
        elements: "Plant, Cold, Air, Earth",
        island: "Earth, Tribal, Colossingum, Composer, Gold",
        likes: "Mammott, Tree Hut, Bass String Bridge, Zuffle Tree"
    },
    {
        name: "Yelmut",
        elements: "Plant, Cold, Air, Fire",
        island: "Light, Amber",
        likes: "Flowah, Phangler, Stogg, Tring, Mount Knottshurr, Bingo Bango Bongos, The Thunker"
    },
    {
        name: "Incisaur",
        elements: "Plant, Cold, Water, Fire",
        island: "Bone, Amber",
        likes: "Clackula, Floogull, Boskus, Edamimi, PongPing, Cold Globe, Thumpies Totem\, Too, Star Rocks"
    },
    {
        name: "Tiawa",
        elements: "Plant, Air, Water, Fire",
        island: "Light, Amber",
        likes: "Flowah, Whaddle, Woolabee, Gnarls, Cold Globe, Swurlee Tree, Spatial Sapling"
    },
    {
        name: "PongPing",
        elements: "Plant, Cold, Earth, Fire",
        island: "Faerie, Amber",
        likes: "Boskus, Repatillo, Woolabee, Gnarls, Sweetstreamz Tree, Elmenco Stump, Bingo Bango Bongos"
    },
    {
        name: "Edamimi",
        elements: "Plant, Water, Earth, Fire",
        island: "Psychic, Amber",
        likes: "Periscorp, Glowl, Whaddle, Tiawa, Tuskski, Mount Knottshurr, Ockulo Tree, Swurlee Tree"
    },
    {
        name: "Bisonorus",
        elements: "Plant, Air, Water, Fire",
        island: "Psychic, Amber",
        likes: "Tapricorn, Sooza, Thrumble, Krillby, Gnarls, Givutawai Tree, Star Rocks, Innertuba"
    },
    {
        name: "Tring",
        elements: "Plant, Air, Earth, Fire",
        island: "Haven, Amber",
        likes: "Stogg, Sneyser, Incisaur, Drummidary, Ambered Thing, Babayag Tower, Flappy Flag"
    },
    {
        name: "Sneyser",
        elements: "Cold, Air, Water, Fire",
        island: "Oasis, Amber",
        likes: "Glowl, Sooza, Barrb, Tuskski, Fire Bush, Tub Fountain, Toob"
    },
    {
        name: "Krillby",
        elements: "Cold, Air, Earth, Fire",
        island: "Faerie, Amber",
        likes: "Ziggurab, Phangler, Thrumble, Bisnorus, Striking Bulbs, Hammock, Boss Monument"
    },
    {
        name: "Flum Ox",
        elements: "Air, Water, Earth, Fire",
        island: "Bone, Amber",
        likes: "Kayna, Whaddle, Sneyser, Wynq, PU System, Freed Thing, Givutawai Tree"
    },
    {
        name: "Blow't",
        elements: "Plant, Cold, Fire, Light",
        island: "Light, Nexus",
        likes: "Gob, Cozee Cabin, Barbloo Statue, Wubbox Stockpile"
    },
    {
        name: "Gloptic",
        elements: "Plant, Water, Fire, Psychic",
        island: "Psychic, Nexus",
        likes: "Tapricorn, Jarhead, Harpsitree, Travelers' Sign"
    },
    {
        name: "Pladdie",
        elements: "Cold, Earth, Fire, Faerie",
        island: "Faerie, Nexus",
        likes: "Wimmzies, Wild Bagpipe, Wubbox Stockpile, Pipes of Cicado"
    },
    {
        name: "Plinkajou",
        elements: "Water, Earth, Fire, Bone",
        island: "Bone, Nexus",
        likes: "Clackula, Jarhead, Bloofi Tree, Tree Hut"
    },
    {
        name: "Enchantling",
        elements: "Light, Psychic, Faerie, Bone",
        island: "Sanctum",
        likes: "Roarick, Dragon Tower, Mountain Morsel, Ambered Thing"
    },
    {
        name: "Mimic",
        elements: "Plant, Cold, Air, Water, Earth",
        island: "Oasis",
        likes: "Gobbleygoud, Smunkit, Spurrit Statue, Mountain Morsel"
    },
    {
        name: "Bowhead",
        elements: "Plant, Cold, Air, Water, Fire",
        island: "Psychic, Amber",
        likes: "Gloptic, Flum Ox, Stogg, Woolabee, Drummidary, Thumpies Totem, Spatial Sapling, Cold Globe"
    },
    {
        name: "Drummidary",
        elements: "Plant, Cold, Air, Earth, Fire",
        island: "Light, Amber",
        likes: "Blow't, Phangler, Ziggurab, Thrumble, Tuskski, Bingo Bango Bongos, Smunkit, Sweetstreamz Tree"
    },
    {
        name: "Gnarls",
        elements: "Plant, Cold, Water, Earth, Fire",
        island: "Bone, Amber",
        likes: "Kayna, Glowl, Tiawa, Tring, Ockulo Tree, Hammock, Striking Bulbs"
    },
    {
        name: "Candelavra",
        elements: "Plant, Air, Water, Earth, Fire",
        island: "Haven, Amber",
        likes: "Repatillo, Boskus, Wynq, Bowhead, Smunkit, Freed Thing, The Thunker"
    },
    {
        name: "Tuskski",
        elements: "Cold, Air, Water, Earth, Fire",
        island: "Faerie, Amber",
        likes: "Krillby, Flowah, Candelavra, Incisaur, Star Rocks, Cold Globe, Swurlee Tree"
    },
    {
        name: "Lyriccle",
        elements: "Plant, Cold, Air, Water, Earth, Fire",
        island: "???",
        likes: "???"
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
