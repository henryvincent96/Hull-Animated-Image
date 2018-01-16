var Land = (function () {
    function Land() {

    }

    Land.prototype.initialise = function () {

    };

    Land.prototype.draw = function (pContext) {
        var landWidth, landHeight;

        landWidth = 400;
        landHeight = 175;

        pContext.beginPath();
        pContext.fillStyle = "#41cc3b";
        pContext.moveTo(landWidth, landHeight);
        pContext.lineTo(landWidth, -landHeight);
        pContext.lineTo(-landWidth, -landHeight);
        pContext.lineTo(-landWidth, landHeight);
        pContext.closePath();
        pContext.fill();
    };

    Land.prototype.update = function () {

    };

    return Land;
}());