/*global window, Vector*/

var Matrix = (function () {
    function Matrix(pXX, pXY, pXZ, pYX, pYY, pYZ, pZX, pZY, pZZ) {
        this.matrixArray = [
            [pXX, pXY, pXZ],
            [pYX, pYY, pYZ],
            [pZX, pZY, pZZ]
        ];
    }

    Matrix.prototype.getElement = function (pRow, pColumn) {
        return this.matrixArray[pRow][pColumn];
    };

    Matrix.prototype.setElement = function (pRow, pColumn, pValue) {
        this.matrixArray[pRow][pColumn] = pValue;
    };

    Matrix.createIdentity = function () {
        return new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
    };

    Matrix.createTranslation = function (pVector) {
        var mMatrix;
        mMatrix = Matrix.createIdentity();
        mMatrix.setElement(0, 2, pVector.getX());
        mMatrix.setElement(1, 2, pVector.getY());
        return mMatrix;
    };

    Matrix.createScale = function (pVector) {
        var mMatrix;
        mMatrix = Matrix.createIdentity();
        mMatrix.setElement(0, 0, pVector.getX());
        mMatrix.setElement(1, 1, pVector.getY());
        return mMatrix;
    };

    Matrix.createRotation = function (pRad) {
        var mMatrix;
        mMatrix = Matrix.createIdentity();
        mMatrix.setElement(0, 0, Math.cos(pRad));
        mMatrix.setElement(0, 1, -Math.sin(pRad));
        mMatrix.setElement(1, 0, Math.sin(pRad));
        mMatrix.setElement(1, 1, Math.cos(pRad));
        return mMatrix;
    };

    Matrix.prototype.multiply = function (pMatrix) {
        var mMatrix, mNewValue, mNewMulti, i, j;

        mMatrix = new Matrix(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

        for (i = 0; i < 3; i += 1) {
            for (j = 0; j < 3; j += 1) {
                mNewMulti = this.getElement(i, 0);
                mNewMulti *= pMatrix.getElement(0, j);

                mNewValue = mNewMulti;

                mNewMulti = this.getElement(i, 1);
                mNewMulti *= pMatrix.getElement(1, j);

                mNewValue += mNewMulti;

                mNewMulti = this.getElement(i, 2);
                mNewMulti *= pMatrix.getElement(2, j);

                mNewValue += mNewMulti;

                mMatrix.setElement(i, j, mNewValue);
            }
        }

        return mMatrix;
    };

    Matrix.prototype.multiplyVector = function (pVector) {
        var i, mVector, mNewMulti, mNewValue;

        mVector = new Vector(0, 0, 0);

        for (i = 0; i < 3; i += 1) {
            mNewMulti = this.getElement(i, 0);
            mNewMulti *= pVector.getX();

            mNewValue = mNewMulti;

            mNewMulti = this.getElement(i, 1);
            mNewMulti *= pVector.getY();

            mNewValue += mNewMulti;

            mNewMulti = this.getElement(i, 2);
            mNewMulti *= pVector.getZ();

            mNewValue += mNewMulti;

            if (i === 0) {
                mVector.setX(mNewValue);
            }
            if (i === 1) {
                mVector.setY(mNewValue);
            }
            if (i === 2) {
                mVector.setZ(mNewValue);
            }
        }

        return mVector;
    };

    Matrix.prototype.setTransform = function (pContext) {
        var a, b, c, d, e, f;
        a = this.getElement(0, 0);
        b = this.getElement(1, 0);
        c = this.getElement(0, 1);
        d = this.getElement(1, 1);
        e = this.getElement(0, 2);
        f = this.getElement(1, 2);
        pContext.setTransform(a, b, c, d, e, f);
    };

    Matrix.prototype.transform = function (pContext) {
        var a, b, c, d, e, f;
        a = this.getElement(0, 0);
        b = this.getElement(1, 0);
        c = this.getElement(0, 1);
        d = this.getElement(1, 1);
        e = this.getElement(0, 2);
        f = this.getElement(1, 2);
        pContext.transform(a, b, c, d, e, f);
    };

    return Matrix;
}());