var River = (function () {
    function River() {

    }

    River.prototype.initialise = function () {

    };

    River.prototype.draw = function (pContext) {
        var riverWidth, riverHeight;

        riverWidth = 300;
        riverHeight = 175;

        pContext.beginPath();
        pContext.fillStyle = "#2262B2";
        pContext.lineTo(-riverWidth, riverHeight);
        pContext.lineTo(riverWidth * 2, riverHeight);
        pContext.lineTo(riverWidth / 2, -riverHeight);
        pContext.closePath();
        pContext.fill();
    };

    River.prototype.update = function () {

    };

    return River;
}());