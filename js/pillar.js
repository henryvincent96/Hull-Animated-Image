var Pillar = (function () {
    function Pillar() {

    }

    Pillar.prototype.initialise = function () {

    };

    Pillar.prototype.draw = function (pContext) {
        var pillarWidth, pillarHeight, pillarHalfWidth;

        pillarHeight = 150;
        pillarWidth = 10;
        pillarHalfWidth = -pillarWidth + pillarWidth;

        pContext.beginPath();
        pContext.fillStyle = "#FF7763";
        pContext.moveTo(-pillarWidth, pillarHeight);
        pContext.lineTo(pillarWidth, pillarHeight);
        pContext.lineTo(pillarWidth, -pillarHeight);
        pContext.arc(pillarHalfWidth, -pillarHeight,
            pillarWidth,
            0,
            Math.PI,
            true);
        pContext.closePath();
        pContext.fill();
    };

    Pillar.prototype.update = function () {

    };

    return Pillar;
}());