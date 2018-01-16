var Road = (function () {
    function Road() {

    }

    Road.prototype.initialise = function () {

    };

    Road.prototype.draw = function (pContext) {
        var roadWidth, roadHeight;

        roadWidth = 800;
        roadHeight = 5;

        pContext.beginPath();
        pContext.fillStyle = "#FF7763";
        pContext.moveTo(-roadWidth, -roadHeight);
        pContext.lineTo(roadWidth, -roadHeight);
        pContext.lineTo(roadWidth, roadHeight);
        pContext.lineTo(-roadWidth, roadHeight);
        pContext.closePath();
        pContext.fill();
    };

    Road.prototype.update = function () {

    };

    return Road;
}());