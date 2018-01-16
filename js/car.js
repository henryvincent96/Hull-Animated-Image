/*global window, Matrix, Vector, Wheel, SceneGraphNode*/

var Car = (function () {
    function Car(pPosition) {
        this.mRootNode = new SceneGraphNode(Matrix.createIdentity());
        this.setPosition(pPosition);
    }
    Car.prototype.getPosition = function () {
        return this.mPosition;
    };
    Car.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };

    Car.prototype.initialise = function () {
        var leftWheelTransform, leftWheelNode,
            rightWheelTransform, rightWheelNode;

        leftWheelTransform = Matrix.createTranslation(new Vector(-100, 90));
        leftWheelNode = new SceneGraphNode(leftWheelTransform);
        leftWheelNode.addChild(new Wheel());

        rightWheelTransform = Matrix.createTranslation(new Vector(100, 90));
        rightWheelNode = new SceneGraphNode(rightWheelTransform);
        rightWheelNode.addChild(new Wheel());

        this.mRootNode.addChild(leftWheelNode);
        this.mRootNode.addChild(rightWheelNode);
    };

    Car.prototype.draw = function (pContext, pTransformMatrix) {
        var carWidth, carHeight, carTransform;

        carWidth = 200;
        carHeight = 100;

        carTransform = Matrix.createTranslation(this.getPosition());
        carTransform.transform(pContext);

        pContext.beginPath();
        pContext.fillStyle = "#cc783b";
        pContext.moveTo(-carWidth, carHeight);
        pContext.lineTo(carWidth, carHeight);
        pContext.lineTo(carWidth, 0);
        pContext.lineTo(carWidth / 5 * 4, 0);
        pContext.lineTo(carWidth / 5 * 3, -carHeight);
        pContext.lineTo(-(carWidth / 5) * 3, -carHeight);
        pContext.lineTo(-(carWidth / 5) * 4, 0);
        pContext.lineTo(-carWidth, 0);
        pContext.closePath();
        pContext.fill();

        carTransform = pTransformMatrix.multiply(carTransform);

        this.mRootNode.draw(pContext, carTransform);
    };

    Car.prototype.update = function (pDeltaTime) {
        var translateSpeed, newPosition;

        this.mRootNode.update(pDeltaTime);

        translateSpeed = new Vector(0.3, 0);

        if (this.mPosition.getX() > 4250) {
            this.mPosition.setX(-4250);
        }

        newPosition = this.getPosition().add(translateSpeed.multiply(pDeltaTime));
        this.setPosition(newPosition);
    };

    return Car;
}());