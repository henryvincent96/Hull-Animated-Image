var Vector = (function () {
    function Vector(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }

    Vector.prototype.getX = function () {
        return this.mX;
    };
    Vector.prototype.setX = function (pX) {
        this.mX = pX;
    };

    Vector.prototype.getY = function () {
        return this.mY;
    };
    Vector.prototype.setY = function (pY) {
        this.mY = pY;
    };

    Vector.prototype.getZ = function () {
        return this.mZ;
    };
    Vector.prototype.setZ = function (pZ) {
        this.mZ = pZ;
    };

    Vector.prototype.add = function (pNewVector) {
        var resultVX, resultVY, resultVZ;

        resultVX = this.getX() + pNewVector.getX();
        resultVY = this.getY() + pNewVector.getY();
        resultVZ = this.getZ() + pNewVector.getZ();
        return new Vector(resultVX, resultVY, resultVZ);
    };

    Vector.prototype.subtract = function (pNewVector) {
        var resultVX, resultVY, resultVZ;

        resultVX = this.getX() - pNewVector.getX();
        resultVY = this.getY() - pNewVector.getY();
        resultVZ = this.getZ() - pNewVector.getZ();

        return new Vector(resultVX, resultVY, resultVZ);
    };

    Vector.prototype.multiply = function (multiplyFactor) {
        var resultVX, resultVY, resultVZ;

        resultVX = this.getX() * multiplyFactor;
        resultVY = this.getY() * multiplyFactor;
        resultVZ = this.getZ() * multiplyFactor;

        return new Vector(resultVX, resultVY, resultVZ);
    };

    Vector.prototype.divide = function (divideFactor) {
        var resultVX, resultVY, resultVZ;

        resultVX = this.getX() / divideFactor;
        resultVY = this.getY() / divideFactor;
        resultVZ = this.getZ() / divideFactor;

        return new Vector(resultVX, resultVY, resultVZ);
    };

    Vector.prototype.magnitude = function () {
        var xSquared, ySquared;

        xSquared = Math.pow(this.getX(), 2);
        ySquared = Math.pow(this.getY(), 2);

        return Math.sqrt(xSquared + ySquared);
    };

    Vector.prototype.normalise = function () {
        return this.divide(this.magnitude());
    };

    Vector.prototype.limitTo = function (limit) {
        var amountExceeding, newVector;

        if (this.magnitude() > limit) {
            amountExceeding = this.magnitude() - limit;
            newVector = this.normalise();
            newVector = newVector.multiply(amountExceeding);
            newVector = this.subtract(newVector);
        } else {
            newVector = this;
        }

        return newVector;
    };

    Vector.prototype.dotProduct = function (pVector) {
        var mX, mY, mZ;

        mX = pVector.getX() * this.getX();
        mY = pVector.getY() * this.getY();
        mZ = pVector.getZ() * this.getZ();

        return mX + mY + mZ;
    };

    Vector.prototype.interpolate = function (pVector, pInterpolation) {
        var nThisVector, nPVector;

        nThisVector = this.multiply(pInterpolation);
        nPVector = pVector.multiply(1 - pInterpolation);

        return nThisVector.add(nPVector);
    };

    Vector.prototype.rotate = function (pRadians) {
        var nX, nY;
        nX = this.getX() * Math.cos(pRadians) - this.getY() * Math.sin(pRadians);
        nY = this.getX() * Math.sin(pRadians) + this.getY() * Math.cos(pRadians);

        return new Vector(nX, nY, this.getZ());
    };

    Vector.prototype.angleBetween = function (pVector) {
        var mDotProd, mMagnitude;

        mDotProd = this.dotProduct(pVector);
        mMagnitude = this.magnitude() * pVector.magnitude();

        return Math.acos(mDotProd / mMagnitude);
    };

    return Vector;
}());