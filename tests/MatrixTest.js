/*global it, describe, expect, Vector, Matrix*/
/// <reference path="../js/vector.js"/>
/// <reference path="../js/matrix.js"/>
/// <reference path="../Scripts/jasmine.js"/>

describe("Matrix test: ", function () {

    describe("Constructor", function () {
        var matrix = new Matrix(1, 2, 3, 4, 5, 6, 7, 8, 9);

        it("Element (0,0) Set", function () {
            expect(matrix.getElement(0, 0)).toEqual(1);
        });

        it("Element (0,1) Set", function () {
            expect(matrix.getElement(0, 1)).toEqual(2);
        });

        it("Element (0,2) Set", function () {
            expect(matrix.getElement(0, 2)).toEqual(3);
        });

        it("Element (1,0) Set", function () {
            expect(matrix.getElement(1, 0)).toEqual(4);
        });

        it("Element (1,1) Set", function () {
            expect(matrix.getElement(1, 1)).toEqual(5);
        });

        it("Element (1,2) Set", function () {
            expect(matrix.getElement(1, 2)).toEqual(6);
        });

        it("Element (2,0) Set", function () {
            expect(matrix.getElement(2, 0)).toEqual(7);
        });

        it("Element (2,1) Set", function () {
            expect(matrix.getElement(2, 1)).toEqual(8);
        });

        it("Element (2,2) Set", function () {
            expect(matrix.getElement(2, 2)).toEqual(9);
        });
    });

    describe("Create Identity", function () {
        var matrix = Matrix.createIdentity();
        it("Element (0,0) Set", function () {
            expect(matrix.getElement(0, 0)).toEqual(1);
        });

        it("Element (0,1) Set", function () {
            expect(matrix.getElement(0, 1)).toEqual(0);
        });

        it("Element (0,2) Set", function () {
            expect(matrix.getElement(0, 2)).toEqual(0);
        });

        it("Element (1,0) Set", function () {
            expect(matrix.getElement(1, 0)).toEqual(0);
        });

        it("Element (1,1) Set", function () {
            expect(matrix.getElement(1, 1)).toEqual(1);
        });

        it("Element (1,2) Set", function () {
            expect(matrix.getElement(1, 2)).toEqual(0);
        });

        it("Element (2,0) Set", function () {
            expect(matrix.getElement(2, 0)).toEqual(0);
        });

        it("Element (2,1) Set", function () {
            expect(matrix.getElement(2, 1)).toEqual(0);
        });

        it("Element (2,2) Set", function () {
            expect(matrix.getElement(2, 2)).toEqual(1);
        });

    });

    describe("Create Translation", function () {
        var translationVector, matrix;
        translationVector = new Vector(30, 40, 1);
        matrix = Matrix.createTranslation(translationVector);
        it("Element (0,0) Set", function () {
            expect(matrix.getElement(0, 0)).toEqual(1);
        });

        it("Element (0,1) Set", function () {
            expect(matrix.getElement(0, 1)).toEqual(0);
        });

        it("Element (0,2) Set", function () {
            expect(matrix.getElement(0, 2)).toEqual(30);
        });

        it("Element (1,0) Set", function () {
            expect(matrix.getElement(1, 0)).toEqual(0);
        });

        it("Element (1,1) Set", function () {
            expect(matrix.getElement(1, 1)).toEqual(1);
        });

        it("Element (1,2) Set", function () {
            expect(matrix.getElement(1, 2)).toEqual(40);
        });

        it("Element (2,0) Set", function () {
            expect(matrix.getElement(2, 0)).toEqual(0);
        });

        it("Element (2,1) Set", function () {
            expect(matrix.getElement(2, 1)).toEqual(0);
        });

        it("Element (2,2) Set", function () {
            expect(matrix.getElement(2, 2)).toEqual(1);
        });

    });

    describe("Create Scale", function () {
        var scaleVector, matrix;
        scaleVector = new Vector(30, 40, 1);
        matrix = Matrix.createScale(scaleVector);
        it("Element (0,0) Set", function () {
            expect(matrix.getElement(0, 0)).toEqual(30);
        });

        it("Element (0,1) Set", function () {
            expect(matrix.getElement(0, 1)).toEqual(0);
        });

        it("Element (0,2) Set", function () {
            expect(matrix.getElement(0, 2)).toEqual(0);
        });

        it("Element (1,0) Set", function () {
            expect(matrix.getElement(1, 0)).toEqual(0);
        });

        it("Element (1,1) Set", function () {
            expect(matrix.getElement(1, 1)).toEqual(40);
        });

        it("Element (1,2) Set", function () {
            expect(matrix.getElement(1, 2)).toEqual(0);
        });

        it("Element (2,0) Set", function () {
            expect(matrix.getElement(2, 0)).toEqual(0);
        });

        it("Element (2,1) Set", function () {
            expect(matrix.getElement(2, 1)).toEqual(0);
        });

        it("Element (2,2) Set", function () {
            expect(matrix.getElement(2, 2)).toEqual(1);
        });

    });

    describe("Create Rotation", function () {
        var rotation, matrix;
        rotation = Math.PI / 2;
        matrix = Matrix.createRotation(rotation);
        it("Element (0,0) Set", function () {
            expect(matrix.getElement(0, 0)).toEqual(Math.cos(rotation));
        });

        it("Element (0,1) Set", function () {
            expect(matrix.getElement(0, 1)).toEqual(-Math.sin(rotation));
        });

        it("Element (0,2) Set", function () {
            expect(matrix.getElement(0, 2)).toEqual(0);
        });

        it("Element (1,0) Set", function () {
            expect(matrix.getElement(1, 0)).toEqual(Math.sin(rotation));
        });

        it("Element (1,1) Set", function () {
            expect(matrix.getElement(1, 1)).toEqual(Math.cos(rotation));
        });

        it("Element (1,2) Set", function () {
            expect(matrix.getElement(1, 2)).toEqual(0);
        });

        it("Element (2,0) Set", function () {
            expect(matrix.getElement(2, 0)).toEqual(0);
        });

        it("Element (2,1) Set", function () {
            expect(matrix.getElement(2, 1)).toEqual(0);
        });

        it("Element (2,2) Set", function () {
            expect(matrix.getElement(2, 2)).toEqual(1);
        });

    });

    describe("Multiply vector", function () {
        describe("Translation", function () {
            var vector, translationVector, matrix, secondVector;
            vector = new Vector(30, 40, 1);
            translationVector = new Vector(10, 20, 1);
            matrix = Matrix.createTranslation(translationVector);
            secondVector = matrix.multiplyVector(vector);
            it("X Set", function () {
                expect(secondVector.getX()).toEqual(40);
            });

            it("Y Set", function () {
                expect(secondVector.getY()).toEqual(60);
            });

            it("Z Set", function () {
                expect(secondVector.getZ()).toEqual(1);
            });
        });
        describe("Rotation", function () {
            var vector, rotation, matrix, secondVector;
            vector = new Vector(30, 40, 1);
            rotation = Math.PI / 2;
            matrix = Matrix.createRotation(rotation);
            secondVector = matrix.multiplyVector(vector);
            it("X Set", function () {
                expect(secondVector.getX()).toBeCloseTo(-40, 1);
            });

            it("Y Set", function () {
                expect(secondVector.getY()).toBeCloseTo(30, 1);
            });

            it("Z Set", function () {
                expect(secondVector.getZ()).toBeCloseTo(1, 1);
            });
        });
        describe("Scale", function () {
            var vector, scaleVector, matrix, secondVector;
            vector = new Vector(30, 40, 1);
            scaleVector = new Vector(2, 2, 1);
            matrix = Matrix.createScale(scaleVector);
            secondVector = matrix.multiplyVector(vector);
            it("X Set", function () {
                expect(secondVector.getX()).toEqual(60);
            });

            it("Y Set", function () {
                expect(secondVector.getY()).toEqual(80);
            });

            it("Z Set", function () {
                expect(secondVector.getZ()).toEqual(1);
            });
        });
    });

    describe("Multiply", function () {
        var rotation, scaleVector, translationVector, translationMatrix,
            scaleMatrix, rotationMatrix, scaleXTranslationMatrix, translationXScaleMatrix,
            chainedMatrix;
        rotation = Math.PI / 2;
        rotationMatrix = Matrix.createRotation(rotation);
        scaleVector = new Vector(2, 2, 1);
        scaleMatrix = Matrix.createScale(scaleVector);
        translationVector = new Vector(10, 20, 1);
        translationMatrix = Matrix.createTranslation(translationVector);

        describe("Scale X Translate", function () {
            scaleXTranslationMatrix = scaleMatrix.multiply(translationMatrix);
            it("Element (0,0) Set", function () {
                expect(scaleXTranslationMatrix.getElement(0, 0)).toEqual(2);
            });

            it("Element (0,1) Set", function () {
                expect(scaleXTranslationMatrix.getElement(0, 1)).toEqual(0);
            });

            it("Element (0,2) Set", function () {
                expect(scaleXTranslationMatrix.getElement(0, 2)).toEqual(20);
            });

            it("Element (1,0) Set", function () {
                expect(scaleXTranslationMatrix.getElement(1, 0)).toEqual(0);
            });

            it("Element (1,1) Set", function () {
                expect(scaleXTranslationMatrix.getElement(1, 1)).toEqual(2);
            });

            it("Element (1,2) Set", function () {
                expect(scaleXTranslationMatrix.getElement(1, 2)).toEqual(40);
            });

            it("Element (2,0) Set", function () {
                expect(scaleXTranslationMatrix.getElement(2, 0)).toEqual(0);
            });

            it("Element (2,1) Set", function () {
                expect(scaleXTranslationMatrix.getElement(2, 1)).toEqual(0);
            });

            it("Element (2,2) Set", function () {
                expect(scaleXTranslationMatrix.getElement(2, 2)).toEqual(1);
            });
        });

        describe("Translate X Scale", function () {
            translationXScaleMatrix = translationMatrix.multiply(scaleMatrix);
            it("Element (0,0) Set", function () {
                expect(translationXScaleMatrix.getElement(0, 0)).toEqual(2);
            });

            it("Element (0,1) Set", function () {
                expect(translationXScaleMatrix.getElement(0, 1)).toEqual(0);
            });

            it("Element (0,2) Set", function () {
                expect(translationXScaleMatrix.getElement(0, 2)).toEqual(10);
            });

            it("Element (1,0) Set", function () {
                expect(translationXScaleMatrix.getElement(1, 0)).toEqual(0);
            });

            it("Element (1,1) Set", function () {
                expect(translationXScaleMatrix.getElement(1, 1)).toEqual(2);
            });

            it("Element (1,2) Set", function () {
                expect(translationXScaleMatrix.getElement(1, 2)).toEqual(20);
            });

            it("Element (2,0) Set", function () {
                expect(translationXScaleMatrix.getElement(2, 0)).toEqual(0);
            });

            it("Element (2,1) Set", function () {
                expect(translationXScaleMatrix.getElement(2, 1)).toEqual(0);
            });

            it("Element (2,2) Set", function () {
                expect(translationXScaleMatrix.getElement(2, 2)).toEqual(1);
            });
        });

        describe("Chaining", function () {
            var cosAngle, sinAngle;
            cosAngle = Math.cos(Math.PI / 2);
            sinAngle = Math.sin(Math.PI / 2);
            chainedMatrix =
                translationMatrix.multiply(scaleMatrix).multiply(rotationMatrix);
            it("Element (0,0) Set", function () {
                expect(chainedMatrix.getElement(0, 0)).toEqual(2 * cosAngle);
            });

            it("Element (0,1) Set", function () {
                expect(chainedMatrix.getElement(0, 1)).toEqual(2 * -sinAngle);
            });

            it("Element (0,2) Set", function () {
                expect(chainedMatrix.getElement(0, 2)).toEqual(10);
            });

            it("Element (1,0) Set", function () {
                expect(chainedMatrix.getElement(1, 0)).toEqual(2 * sinAngle);
            });

            it("Element (1,1) Set", function () {
                expect(chainedMatrix.getElement(1, 1)).toEqual(2 * cosAngle);
            });

            it("Element (1,2) Set", function () {
                expect(chainedMatrix.getElement(1, 2)).toEqual(20);
            });

            it("Element (2,0) Set", function () {
                expect(chainedMatrix.getElement(2, 0)).toEqual(0);
            });

            it("Element (2,1) Set", function () {
                expect(chainedMatrix.getElement(2, 1)).toEqual(0);
            });

            it("Element (2,2) Set", function () {
                expect(chainedMatrix.getElement(2, 2)).toEqual(1);
            });
        });

    });

});