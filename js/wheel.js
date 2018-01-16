/*global window, Matrix, Vector*/

var Wheel = (function () {
    function Wheel() {
        this.mCurrentRotation = 0;
    }

    Wheel.prototype.draw = function (pContext) {
        var wheelRadius, wheelRotate;

        wheelRotate = Matrix.createRotation(this.mCurrentRotation);
        wheelRotate.transform(pContext);

        wheelRadius = 55;

        pContext.lineWidth = 10;

        pContext.beginPath();
        pContext.fillStyle = "#998679";
        pContext.arc(0, 0,
            wheelRadius, 0,
            Math.PI * 2);
        pContext.closePath();
        pContext.fill();

        pContext.save();

        pContext.strokeStyle = "#E5D7CC";

        pContext.beginPath();
        pContext.moveTo(-wheelRadius, 0);
        pContext.lineTo(wheelRadius, 0);
        pContext.stroke();
        pContext.closePath();

        pContext.beginPath();
        pContext.moveTo(0, -wheelRadius);
        pContext.lineTo(0, wheelRadius);
        pContext.stroke();
        pContext.closePath();

        pContext.restore();
    };

    Wheel.prototype.update = function (pDeltaTime) {
        var rotationRate, newRotation;

        rotationRate = Math.PI * 0.0007;

        newRotation = this.mCurrentRotation + rotationRate * pDeltaTime;

        if (newRotation > Math.PI * 2) {
            newRotation = newRotation % Math.PI * 2;
        }

        this.mCurrentRotation = newRotation;
    };

    return Wheel;
}());