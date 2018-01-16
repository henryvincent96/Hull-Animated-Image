/*global window, Matrix, Vector, SceneGraphNode, Image*/

var Bird = (function () {
    function Bird(pScale) {
        this.setScale(pScale);
        this.frameWidth = 100;
        this.frameCount = 12;
        this.frameIndex = 0;
        this.img = new Image();
        this.img.src = "./img/Bird Sheet.png";
        this.mPosition = new Vector(440, 100);
        this.mtranslateSpeed = new Vector(-0.1, 0);
    }
    Bird.prototype.getScale = function () {
        return this.mScale;
    };
    Bird.prototype.setScale = function (pScale) {
        this.mScale = pScale;
    };
    Bird.prototype.getPosition = function () {
        return this.mPosition;
    };
    Bird.prototype.setPosition = function (pPosition) {
        this.mPosition = pPosition;
    };

    Bird.prototype.initialise = function () {

    };

    Bird.prototype.draw = function (pContext) {
        var currentFrame, birdTranform, birdScale, birdTranslate;

        pContext.save();

        birdScale = Matrix.createScale(this.getScale());
        birdTranslate = Matrix.createTranslation(this.mPosition);
        birdTranform = birdTranslate.multiply(birdScale);
        birdTranform.transform(pContext);

        currentFrame = this.frameIndex * this.frameWidth;

        pContext.drawImage(this.img,
            currentFrame,
            0,
            this.frameWidth,
            this.img.height,
            -50,
            -48,
            100,
            this.img.height);

        pContext.restore();
    };

    Bird.prototype.update = function (pDeltaTime) {
        var newPosition, minHeight, maxHeight, newHeight, maxSpeed, minSpeed, newSpeed;

        if (this.frameIndex > this.frameCount - 1) {
            this.frameIndex = 0;
        } else {
            this.frameIndex += 1;
        }

        minHeight = -50;
        maxHeight = 150;

        minSpeed = 5;
        maxSpeed = 8;

        if (this.mPosition.getX() < -525) {
            this.mPosition.setX(430);
        }

        if (this.mPosition.getX() > 425) {
            newSpeed = Math.floor(Math.random() * maxSpeed + minSpeed);
            newSpeed = newSpeed / 100;
            newSpeed = this.getScale().getX() * 5 * newSpeed;
            this.mtranslateSpeed.setX(-newSpeed);
            newHeight = Math.floor(Math.random() * maxHeight + minHeight);
            this.mPosition.setY(newHeight);
        }

        newPosition = this.mPosition.add(this.mtranslateSpeed.multiply(pDeltaTime));
        this.mPosition = newPosition;
    };

    return Bird;
}());