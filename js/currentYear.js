var CurrentYear = (function () {
    function CurrentYear() {

    }

    CurrentYear.prototype.initialise = function () {

    };

    CurrentYear.prototype.draw = function (pContext) {
        pContext.fillStyle = "#FFC04A";
        pContext.font = "70px Segoe UI Black";
        pContext.textAlign = "center";
        pContext.fillText("2017", 0, 0);
    };

    CurrentYear.prototype.update = function () {

    };

    return CurrentYear;
}());