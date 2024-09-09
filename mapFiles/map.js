// Variables to hold canvas and context
let canvas, ctx;

const updateCanvas = () => ({width: window.innerWidth, height: window.innerHeight}) 
 
updateCanvas()

// Array to hold loaded image objects
const images = [
    { src: 'map_01.png', width: 2048, height: 1754, x: 0, y: 0 },
    { src: 'map_02.png', width: 2048, height: 1754, x: 2048, y: 0 },
    { src: 'map_03.png', width: 2048, height: 1754, x: 0, y: 1754 },
    { src: 'map_04.png', width: 2048, height: 1754, x: 2048, y: 1754 },
    { src: 'map_middle.png', width: 1065, height: 714, x: 1515, y: 1395 },
    { src: 'map_upper_right.png', width: 1080, height: 800, x: 2800, y: 328 },
    { src: 'map_upper_left.png', width: 680, height: 500, x: 342, y: 534 },
    { src: 'map_lower_left.png', width: 1220, height: 680, x: 276, y: 2402 }
];

// Variable to hold the pin image
let pinImage;

// XML string containing pin data
const xmlPinString = `<?xml version="1.0" encoding="UTF-8"?>
<TextureAtlas imagePath="map_pins_sheet_01.png" width="2048" height="2048" hires="true">
    <sprite n="map_pin_island01" x="2" y="1053" w="236" h="333" oX="32" oY="15" oW="118" oH="166"/>
    <sprite n="map_pin_island02" x="728" y="1332" w="268" h="283" oX="32" oY="97" oW="134" oH="141"/>
    <sprite n="map_pin_island03" x="240" y="703" w="268" h="330" oX="0" oY="18" oW="134" oH="165"/>
    <sprite n="map_pin_island04" x="2" y="1388" w="236" h="332" oX="32" oY="16" oW="118" oH="166"/>
    <sprite n="map_pin_island05" x="493" y="1035" w="236" h="295" oX="32" oY="53" oW="118" oH="147"/>
    <sprite n="map_pin_island06" x="994" y="2" w="236" h="271" oX="32" oY="77" oW="118" oH="135"/>
    <sprite n="map_pin_island07" x="2" y="1722" w="255" h="324" oX="29" oY="24" oW="127" oH="162"/>
    <sprite n="map_pin_island08" x="2" y="703" w="236" h="348" oX="32" oY="0" oW="118" oH="174"/>
    <sprite n="map_pin_island09" x="731" y="976" w="268" h="281" oX="9" oY="80" oW="134" oH="140" r="y"/>
    <sprite n="map_pin_island10" x="478" y="1362" w="248" h="304" oX="29" oY="44" oW="124" oH="152"/>
    <sprite n="map_pin_island11" x="782" y="1617" w="276" h="236" oX="32" oY="115" oW="138" oH="118" r="y"/>
    <sprite n="map_pin_island12" x="826" y="294" w="251" h="272" oX="32" oY="76" oW="125" oH="136"/>
    <sprite n="map_pin_island13" x="240" y="1362" w="236" h="321" oX="32" oY="27" oW="118" oH="160"/>
    <sprite n="map_pin_island14" x="259" y="1685" w="236" h="308" oX="32" oY="40" oW="118" oH="154"/>
    <sprite n="map_pin_island15" x="298" y="352" w="236" h="328" oX="32" oY="20" oW="118" oH="164"/>
    <sprite n="map_pin_island16" x="497" y="1668" w="283" h="285" oX="8" oY="63" oW="141" oH="142"/>
    <sprite n="map_pin_island17" x="785" y="624" w="237" h="278" oX="31" oY="70" oW="118" oH="139"/>
    <sprite n="map_pin_island18" x="518" y="2" w="236" h="327" oX="32" oY="21" oW="118" oH="163"/>
    <sprite n="map_pin_island19" x="2" y="353" w="294" h="348" oX="2" oY="0" oW="147" oH="174"/>
    <sprite n="map_pin_island20" x="510" y="682" w="273" h="292" oX="5" oY="75" oW="136" oH="146" r="y"/>
    <sprite n="map_pin_island21" x="536" y="331" w="288" h="291" oX="4" oY="60" oW="144" oH="145" r="y"/>
    <sprite n="map_pin_island22" x="2" y="2" w="236" h="349" oX="32" oY="12" oW="118" oH="174"/>
    <sprite n="map_pin_island23" x="240" y="1035" w="251" h="325" oX="27" oY="23" oW="125" oH="162"/>
    <sprite n="map_pin_island24" x="756" y="2" w="236" h="290" oX="32" oY="58" oW="118" oH="145"/>
    <sprite n="map_pin_island25" x="240" y="2" w="276" h="348" oX="13" oY="0" oW="138" oH="174"/>
</TextureAtlas>`;

const xmlLocString = `<?xml version="1.0" encoding="UTF-8"?>
<TextureAtlas imagePath="map_locations_sheet_01.png" width="2048" height="2048" hires="true">
    <sprite n="map_icon_sketch_island01" x="1784" y="714" w="262" h="354" oX="5" oY="20" oW="131" oH="177" r="y"/>
    <sprite n="map_icon_sketch_island02" x="716" y="263" w="354" h="267" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island03" x="2" y="2" w="355" h="267" oX="4" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island04" x="1429" y="276" w="354" h="267" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island05" x="2" y="271" w="354" h="266" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island06" x="1786" y="2" w="259" h="354" oX="5" oY="20" oW="129" oH="177" r="y"/>
    <sprite n="map_icon_sketch_island07" x="1785" y="358" w="261" h="354" oX="6" oY="20" oW="130" oH="177" r="y"/>
    <sprite n="map_icon_sketch_island08" x="1072" y="531" w="354" h="267" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island09" x="358" y="271" w="354" h="266" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island10" x="1430" y="2" w="354" h="272" oX="5" oY="20" oW="177" oH="136"/>
    <sprite n="map_icon_sketch_island11" x="358" y="539" w="354" h="265" oX="5" oY="20" oW="177" oH="132"/>
    <sprite n="map_icon_sketch_island12" x="1073" y="261" w="354" h="268" oX="5" oY="20" oW="177" oH="134"/>
    <sprite n="map_icon_sketch_island13" x="714" y="532" w="354" h="266" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island14" x="2" y="539" w="354" h="266" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island15" x="1428" y="545" w="354" h="267" oX="5" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island16" x="1426" y="814" w="354" h="263" oX="5" oY="20" oW="177" oH="131"/>
    <sprite n="map_icon_sketch_island17" x="2" y="807" w="354" h="264" oX="5" oY="20" oW="177" oH="132"/>
    <sprite n="map_icon_sketch_island18" x="1070" y="1066" w="354" h="263" oX="5" oY="20" oW="177" oH="131"/>
    <sprite n="map_icon_sketch_island19" x="1073" y="2" w="355" h="257" oX="5" oY="20" oW="177" oH="128"/>
    <sprite n="map_icon_sketch_island20" x="714" y="800" w="354" h="265" oX="5" oY="20" oW="177" oH="132"/>
    <sprite n="map_icon_sketch_island21" x="358" y="806" w="354" h="265" oX="5" oY="20" oW="177" oH="132"/>
    <sprite n="map_icon_sketch_island22" x="1070" y="800" w="354" h="264" oX="5" oY="20" oW="177" oH="132"/>
    <sprite n="map_icon_sketch_island23" x="714" y="1067" w="354" h="257" oX="5" oY="20" oW="177" oH="128"/>
    <sprite n="map_icon_sketch_island24" x="359" y="2" w="355" h="267" oX="4" oY="20" oW="177" oH="133"/>
    <sprite n="map_icon_sketch_island25" x="716" y="2" w="355" h="259" oX="3" oY="20" oW="177" oH="129"/>
</TextureAtlas>`;

// Coordinates to draw pins at
const pinCoordinates = [
    { name: 'map_pin_island01', x: 1920, y: 2220 }, //plant
    { name: 'map_pin_island02', x: 1976, y: 1020 }, //cold
    { name: 'map_pin_island03', x: 1189, y: 1333 }, //air
    { name: 'map_pin_island04', x: 2614, y: 1836 }, //water
    { name: 'map_pin_island05', x: 1149, y: 1800 }, //earth
    { name: 'map_pin_island06', x: 1955, y: 1460 }, //gold
    { name: 'map_pin_island07', x: 474, y: 2460 }, //ethereal
    { name: 'map_pin_island08', x: 1463, y: 873 }, //shugabush
    { name: 'map_pin_island09', x: 1590, y: 3098 }, //tribal //x and y are switched
    { name: 'map_pin_island10', x: 3370, y: 1999 }, //wublin
    { name: 'map_pin_island11', x: 2320, y: 2650 }, //compose //x and y are switched
    { name: 'map_pin_island12', x: 571, y: 1598 }, //celestial
    { name: 'map_pin_island13', x: 2746, y: 1370 }, //haven
    { name: 'map_pin_island14', x: 3075, y: 1075 }, //oasis
    { name: 'map_pin_island15', x: 2876, y: 2404 }, //psychic
    { name: 'map_pin_island16', x: 815, y: 1073 }, //faerie
    { name: 'map_pin_island17', x: 3397, y: 1308 }, //bone
    { name: 'map_pin_island18', x: 2078, y: 2736 }, //light
    { name: 'map_pin_island19', x: 997, y: 2708 }, //sanctum
    { name: 'map_pin_island20', x: 1121, y: 1114 }, //colossingum //x and y are switched
    { name: 'map_pin_island21', x: 2700, y: 2380 }, //shanty //x and y are switched
    { name: 'map_pin_island22', x: 2287, y: 1700 }, //amber
    { name: 'map_pin_island23', x: 586, y: 628 }, //mythical
    { name: 'map_pin_island24', x: 393, y: 2805 }, //workshop
    { name: 'map_pin_island25', x: 3325, y: 390 } //nexus
];

const locCoordinates = [
    { name: 'map_icon_sketch_island01', x: 941, y: 1917 }, //plant //x and y are switched
    { name: 'map_icon_sketch_island02', x: 1974, y: 1117 }, //cold
    { name: 'map_icon_sketch_island03', x: 1172, y: 1391 }, //air
    { name: 'map_icon_sketch_island04', x: 2611, y: 1893 }, //water
    { name: 'map_icon_sketch_island05', x: 1146, y: 1874 }, //earth
    { name: 'map_icon_sketch_island06', x: 1672, y: 1953 }, //gold //x and y are switched
    { name: 'map_icon_sketch_island07', x: 696, y: 469 }, //ethereal ///x and y are switched
    { name: 'map_icon_sketch_island08', x: 1460, y: 922 }, //shugabush
    { name: 'map_icon_sketch_island09', x: 3084, y: 1714 }, //tribal
    { name: 'map_icon_sketch_island10', x: 3366, y: 2069 }, //wublin
    { name: 'map_icon_sketch_island11', x: 2648, y: 1019 }, //composer
    { name: 'map_icon_sketch_island12', x: 568, y: 1684 }, //celestial
    { name: 'map_icon_sketch_island13', x: 2743, y: 1432 }, //haven
    { name: 'map_icon_sketch_island14', x: 3073, y: 1143 }, //oasis
    { name: 'map_icon_sketch_island15', x: 2874, y: 2463 }, //psychic
    { name: 'map_icon_sketch_island16', x: 800, y: 1154 }, //faerie
    { name: 'map_icon_sketch_island17', x: 3394, y: 1391 }, //bone
    { name: 'map_icon_sketch_island18', x: 2076, y: 2795 }, //light 
    { name: 'map_icon_sketch_island19', x: 979, y: 2759 }, //sanctum
    { name: 'map_icon_sketch_island20', x: 1098, y: 2178 }, //colossingum
    { name: 'map_icon_sketch_island21', x: 2363, y: 583 }, //shanty
    { name: 'map_icon_sketch_island22', x: 2285, y: 1754 }, //amber
    { name: 'map_icon_sketch_island23', x: 581, y: 688 }, //mythical
    { name: 'map_icon_sketch_island24', x: 392, y: 2883 }, //workshop
    { name: 'map_icon_sketch_island25', x: 3316, y: 440 } //nexus
];


// Array to hold pin data
let pinData = [];

// Array to hold location data
let locData = [];

// Variables to track map dimensions and position
let totalWidth, totalHeight;
let canvasWidth, canvasHeight;
let initialX, initialY;
let offsetX = 0, offsetY = 0;
let isDragging = false;
let lastX, lastY;

// Function to initialize the map
function initializeMap() {
    canvas = document.getElementById('mapCanvas');
    ctx = canvas.getContext('2d');

    // Load pin image
    pinImage = new Image();
    pinImage.onload = function () {
        // Calculate total width and height of the map
        totalWidth = images[1].x + images[1].width;
        totalHeight = images[2].y + images[2].height;

        // Calculate initial canvas dimensions based on 16:9 aspect ratio
        canvasWidth = canvas.width = window.innerWidth * 0.8; // 80% of viewport width
        canvasHeight = canvas.height = canvasWidth * 9 / 16; // 16:9 aspect ratio

        // Calculate initial position to center the map
        initialX = (canvasWidth - totalWidth) / 2;
        initialY = (canvasHeight - totalHeight) / 2;

        // Load map images and draw onto canvas
        images.forEach(image => {
            const img = new Image();
            img.onload = function () {
                image.imgElement = img; // Store the image element in the image object
                ctx.drawImage(img, initialX + image.x, initialY + image.y, image.width, image.height);
            };
            img.src = image.src;
        });

        // Parse XML data and redraw map
        parseXMLAndRedrawPin();
    };
    pinImage.src = 'map_pins_sheet_01.png'; // Source of pin image

    locImage = new Image();
    locImage.onload = function () {
        // Calculate total width and height of the map
        totalWidth = images[1].x + images[1].width;
        totalHeight = images[2].y + images[2].height;

        // Calculate initial canvas dimensions based on 16:9 aspect ratio
        canvasWidth = canvas.width = window.innerWidth * 0.8; // 80% of viewport width
        canvasHeight = canvas.height = canvasWidth * 9 / 16; // 16:9 aspect ratio

        // Calculate initial position to center the map
        initialX = (canvasWidth - totalWidth) / 2;
        initialY = (canvasHeight - totalHeight) / 2;

        // Load map images and draw onto canvas
        images.forEach(image => {
            const img = new Image();
            img.onload = function () {
                image.imgElement = img; // Store the image element in the image object
                ctx.drawImage(img, initialX + image.x, initialY + image.y, image.width, image.height);
            };
            img.src = image.src;
        });

        // Parse XML data and redraw map
        parseXMLAndRedrawLoc();
    };
    locImage.src = 'map_locations_sheet_01.png'; // Source of pin image

    // Add event listeners for mouse and touch interactions
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    canvas.addEventListener('touchcancel', handleTouchCancel);

    // Add event listeners for keyboard interactions
    document.addEventListener('keydown', handleKeyDown);
}

function parseXMLAndRedrawLoc() {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlLocString, 'text/xml');
    const sprites = xmlDoc.getElementsByTagName('sprite');

    for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i];
        const name = sprite.getAttribute('n');
        const x = parseFloat(sprite.getAttribute('oX')) || 0; // Adjusted to default 0 if not specified
        const y = parseFloat(sprite.getAttribute('oY')) || 0; // Adjusted to default 0 if not specified
        const width = parseFloat(sprite.getAttribute('oW')) || parseFloat(sprite.getAttribute('w'));
        const height = parseFloat(sprite.getAttribute('oH')) || parseFloat(sprite.getAttribute('h'));
        const oX = parseFloat(sprite.getAttribute('x'));
        const oY = parseFloat(sprite.getAttribute('y'));
        const originalWidth = parseFloat(sprite.getAttribute('w'));
        const originalHeight = parseFloat(sprite.getAttribute('h'));
        const r = sprite.getAttribute('r'); // Rotation attribute

        // Store loc data
        if (locData != []) {
            locData.push({ name, x, y, width, height, oX, oY, originalWidth, originalHeight, r });
        }
    }

    redrawMap(); // Redraw map after parsing XML
}

// Function to parse XML string and redraw the map with pins
function parseXMLAndRedrawPin() {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlPinString, 'text/xml');
    const sprites = xmlDoc.getElementsByTagName('sprite');

    for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i];
        const name = sprite.getAttribute('n');
        const x = parseFloat(sprite.getAttribute('oX')) || 0; // Adjusted to default 0 if not specified
        const y = parseFloat(sprite.getAttribute('oY')) || 0; // Adjusted to default 0 if not specified
        const width = parseFloat(sprite.getAttribute('oW')) || parseFloat(sprite.getAttribute('w'));
        const height = parseFloat(sprite.getAttribute('oH')) || parseFloat(sprite.getAttribute('h'));
        const oX = parseFloat(sprite.getAttribute('x'));
        const oY = parseFloat(sprite.getAttribute('y'));
        const originalWidth = parseFloat(sprite.getAttribute('w'));
        const originalHeight = parseFloat(sprite.getAttribute('h'));
        const r = sprite.getAttribute('r'); // Rotation attribute

        // Store pin data
        if (pinData != []) {
            pinData.push({ name, x, y, width, height, oX, oY, originalWidth, originalHeight, r });
        } else if (locData != []) {
            locData.push({ name, x, y, width, height, oX, oY, originalWidth, originalHeight, r });
        }
    }
}

// Function to handle mouse down event
function handleMouseDown(event) {
    isDragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
}

// Function to handle mouse move event
function handleMouseMove(event) {
    if (isDragging) {
        let deltaX = event.clientX - lastX;
        let deltaY = event.clientY - lastY;

        offsetX += deltaX;
        offsetY += deltaY;

        lastX = event.clientX;
        lastY = event.clientY;

        redrawMap();
    }
}

// Function to handle mouse up event
function handleMouseUp(event) {
    isDragging = false;
}

// Function to handle mouse leave event
function handleMouseLeave(event) {
    isDragging = false;
}

// Function to handle touch start event
function handleTouchStart(event) {
    if (event.touches.length === 1) {
        isDragging = true;
        lastX = event.touches[0].clientX;
        lastY = event.touches[0].clientY;
    }
}

// Function to handle touch move event
function handleTouchMove(event) {
    if (isDragging && event.touches.length === 1) {
        let deltaX = event.touches[0].clientX - lastX;
        let deltaY = event.touches[0].clientY - lastY;

        offsetX += deltaX;
        offsetY += deltaY;

        lastX = event.touches[0].clientX;
        lastY = event.touches[0].clientY;

        redrawMap();
    }
}

// Function to handle touch end event
function handleTouchEnd(event) {
    isDragging = false;
}

// Function to handle touch cancel event
function handleTouchCancel(event) {
    isDragging = false;
}

// Function to handle key down event
function handleKeyDown(event) {
    // No zoom functionality, so no action needed here
}

// Function to redraw the map based on current offsets
function redrawMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw map images
    images.forEach(image => {
        ctx.drawImage(
            image.imgElement,
            initialX + image.x + offsetX,
            initialY + image.y + offsetY,
            image.width,
            image.height
        );
    });

    locData.forEach(sketch => {
        // Find the sketch's coordinates from locCoordinates array
        const coordinates = locCoordinates.find(coord => coord.name === sketch.name);
        if (!coordinates) return; // Skip if coordinates are not found
        // Calculate actual position of the sketch on the canvas
        const locX = initialX + offsetX + sketch.x;
        const locY = initialY + offsetY + sketch.y;

        ctx.save();

        // Rotate if necessary (based on 'r' attribute in XML)
        if (sketch.r === 'y') {
            let angle = (-1 * Math.PI) / 2; // This should be in radians
            ctx.rotate(angle); // Rotate 90 degrees counterclockwise
            newlocY = (locY * -1) - 3348
            newlocX = locX
            ctx.translate(newlocY, newlocX);
            console.log(sketch.name + ", X: " + newlocY + ", Y: " + newlocX )
        } else {
            // Translate to the sketch's position
            ctx.translate(locX, locY);
        }

        

        // Draw the sketch image
        ctx.drawImage(
            locImage,
            sketch.oX, sketch.oY, sketch.originalWidth, sketch.originalHeight, // Source rectangle on the pin image
            coordinates.x, coordinates.y, sketch.width, sketch.height // Destination position and size
        );

        ctx.restore();
    });

    // Draw pins on top of the map
    pinData.forEach(pin => {
        // Find the pin's coordinates from pinCoordinates array
        const coordinates = pinCoordinates.find(coord => coord.name === pin.name);
        if (!coordinates) return; // Skip if coordinates are not found
        // Calculate actual position of the pin on the canvas
        const pinX = initialX + offsetX + pin.x;
        const pinY = initialY + offsetY + pin.y;

        ctx.save();

        // Rotate if necessary (based on 'r' attribute in XML)
        if (pin.r === 'y') {
            let angle = (-1 * Math.PI) / 2; // This should be in radians
            ctx.rotate(angle); // Rotate 90 degrees counterclockwise
            newpinY = (pinY * -1) - 3348
            newpinX = pinX
            ctx.translate(newpinY, newpinX);
        } else {
            ctx.translate(pinX, pinY);
        }
        

        // Draw the pin image
        ctx.drawImage(
            pinImage,
            pin.oX, pin.oY, pin.originalWidth, pin.originalHeight, // Source rectangle on the pin image
            coordinates.x, coordinates.y, pin.width, pin.height // Destination position and size
        );

        ctx.restore();
    });// Draw pins on top of the map

}

// Call initializeMap function when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeMap);
