/*global window, alert, document, Vector, Matrix,
SceneGraphNode, requestAnimationFrame, River, Land, Background, Bird,
Pillar, Road, Bridge, Car, CurrentYear*/

//The window load event handler
function onLoad() {
    var mainCanvas, mainContext, origin, matrix, rootNode, lastTime,
        backgroundTransform, backgroundNode, birdsTransform, birdsNode,
        bridgeTransform, bridgeNode, numberOfBirds, i,
        birdsMaxSize, birdsMinSize, thisBirdSize, thisBird, thisBirdPostion,
        carsTransform, carsScale, carsTranslate, carsNode, numberOfCars,
        thisCarOffset, carsDistanceBetween,
        currentYearTransform, currentYearNode;

    //This function will initialise our variables
    function initialiseCanvasContext() {
        //Find the canvas element using its id attribute
        mainCanvas = document.getElementById('mainCanvas');

        //if it couldn't be found
        if (!mainCanvas) {
            //make a message box pop up with the error
            alert('Error: I cannot find the canvas element');
            return;
        }
        //Get the 2D canvas context
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext) {
            alert('Error: failed to get context!');
            return;
        }

        origin = new Vector(mainCanvas.width * 0.5, mainCanvas.height * 0.5);
        matrix = Matrix.createTranslation(origin);
        matrix.setTransform(mainContext);

        backgroundTransform = Matrix.createTranslation(new Vector(0, 162));
        backgroundNode = new SceneGraphNode(backgroundTransform);
        backgroundNode.addChild(new Background());

        birdsTransform = Matrix.createTranslation(new Vector(0, -200));
        birdsNode = new SceneGraphNode(birdsTransform);

        numberOfBirds = 60;
        birdsMinSize = 5;
        birdsMaxSize = 20;

        for (i = 0; i < numberOfBirds; i = i + 1) {
            thisBirdSize = Math.floor(Math.random() * birdsMaxSize + birdsMinSize) / 100;
            thisBird = new Bird(new Vector(thisBirdSize, thisBirdSize));
            thisBirdPostion = new Vector(0, 0);
            thisBirdPostion.setX(Math.floor(Math.random() * 800 + -300));
            thisBirdPostion.setY(Math.floor(Math.random() * 150 + -50));
            thisBird.setPosition(thisBirdPostion);
            birdsNode.addChild(thisBird);
        }

        bridgeTransform = Matrix.createTranslation(new Vector(0, 75));
        bridgeNode = new SceneGraphNode(bridgeTransform);
        bridgeNode.addChild(new Bridge());

        carsScale = Matrix.createScale(new Vector(0.1, 0.1));
        carsTranslate = Matrix.createTranslation(new Vector(0, 131));
        carsTransform = carsTranslate.multiply(carsScale);
        carsNode = new SceneGraphNode(carsTransform);

        numberOfCars = 1;

        for (i = 0; i < numberOfCars; i = i + 1) {
            carsDistanceBetween = 8500 / numberOfCars;
            thisCarOffset = new Vector(i * carsDistanceBetween - 4250, 0);

            carsNode.addChild(new Car(thisCarOffset));
        }

        currentYearTransform = Matrix.createTranslation(new Vector(0, -25));
        currentYearNode = new SceneGraphNode(currentYearTransform);
        currentYearNode.addChild(new CurrentYear());

        rootNode = new SceneGraphNode(matrix);
        rootNode.addChild(backgroundNode);
        rootNode.addChild(birdsNode);
        rootNode.addChild(carsNode);
        rootNode.addChild(bridgeNode);
        rootNode.addChild(currentYearNode);

        rootNode.initialise();

        lastTime = Date.now();
    }

    function draw() {
        rootNode.draw(mainContext, Matrix.createIdentity());
    }

    function update(pDeltaTime) {
        rootNode.update(pDeltaTime);
    }

    function animationLoop() {
        var thisTime, deltaTime;

        thisTime = Date.now();
        deltaTime = thisTime - lastTime;

        update(deltaTime);
        draw();

        lastTime = thisTime;

        requestAnimationFrame(animationLoop);
    }

    initialiseCanvasContext();
    animationLoop();
}

window.addEventListener('load', onLoad, false);