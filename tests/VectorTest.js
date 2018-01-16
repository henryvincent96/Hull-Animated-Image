/*global it, describe, expect, Vector*/
/// <reference path="../js/vector.js"/>
/// <reference path="../Scripts/jasmine.js"/>


describe("Vector test: ", function () {
    var vector = new Vector(30, 40, 0);

    describe("Constructor", function () {
        it("X Set", function () {
            expect(vector.getX()).toEqual(30);
        });
        it("Y Set", function () {
            expect(vector.getY()).toEqual(40);
        });
    });

    describe("Add", function () {
        var secondVector, thirdVector;
        secondVector = new Vector(20, 30, 0);
        thirdVector = vector.add(secondVector);

        it("X Set", function () {
            expect(thirdVector.getX()).toEqual(50);
        });
        it("Y Set", function () {
            expect(thirdVector.getY()).toEqual(70);
        });
    });

    describe("Subtract", function () {
        var secondVector, thirdVector;
        secondVector = new Vector(5, 10, 0);
        thirdVector = vector.subtract(secondVector);

        it("X Set", function () {
            expect(thirdVector.getX()).toEqual(25);
        });
        it("Y Set", function () {
            expect(thirdVector.getY()).toEqual(30);
        });
    });

    describe("Multiply", function () {
        var secondVector, scalar;
        scalar = 10;
        secondVector = vector.multiply(scalar);

        it("X Set", function () {
            expect(secondVector.getX()).toEqual(300);
        });
        it("Y Set", function () {
            expect(secondVector.getY()).toEqual(400);
        });
    });

    describe("Divide", function () {
        var secondVector, scalar;
        scalar = 10;
        secondVector = vector.divide(scalar);

        it("X Set", function () {
            expect(secondVector.getX()).toEqual(3);
        });
        it("Y Set", function () {
            expect(secondVector.getY()).toEqual(4);
        });
    });

    describe("Magnitude", function () {
        var magnitude = vector.magnitude();

        it("Result", function () {
            expect(magnitude).toEqual(50);
        });
    });

    describe("Normalise", function () {
        var normalisedVector, magnitude;
        normalisedVector = vector.normalise();
        magnitude = normalisedVector.magnitude();

        it("Magnitude equals 1", function () {
            expect(magnitude).toEqual(1);
        });

        it("X Set", function () {
            expect(normalisedVector.getX()).toEqual(3 / 5);
        });
        it("Y Set", function () {
            expect(normalisedVector.getY()).toEqual(4 / 5);
        });
    });

    describe("Limit To", function () {
        var limitedVector, magnitude;

        it("Magnitude not exceeding limit", function () {
            limitedVector = vector.limitTo(60);
            magnitude = limitedVector.magnitude();
            expect(magnitude).toEqual(50);
        });

        it("Magnitude exceeding limit", function () {
            limitedVector = vector.limitTo(30);
            magnitude = limitedVector.magnitude();
            expect(magnitude).toEqual(30);
        });
    });

    describe("Dot Product", function () {

        it("Result is zero", function () {
            var secondVector, dotProduct;
            secondVector = new Vector(40, -30, 0);
            dotProduct = vector.dotProduct(secondVector);

            expect(dotProduct).toEqual(0);
        });

        it("Result is positive", function () {
            var secondVector, dotProduct;
            secondVector = new Vector(50, 0, 0);
            dotProduct = vector.dotProduct(secondVector);

            expect(dotProduct).not.toBeLessThan(0);
        });

        it("Result is negative", function () {
            var secondVector, dotProduct;
            secondVector = new Vector(0, -50, 1);
            dotProduct = vector.dotProduct(secondVector);

            expect(dotProduct).toBeLessThan(0);
        });
    });

    describe("Interpolate", function () {
        var secondVector, interpolatedVector, interpolation;
        interpolation = 0.5;
        secondVector = new Vector(60, 80, 0);
        interpolatedVector = vector.interpolate(secondVector, interpolation);

        it("X Set", function () {
            expect(interpolatedVector.getX()).toEqual(45);
        });
        it("Y Set", function () {
            expect(interpolatedVector.getY()).toEqual(60);
        });
    });

    describe("Rotate", function () {
        var rotatedVector, rotation;
        rotation = Math.PI / 2;
        rotatedVector = vector.rotate(rotation);

        it("X Set", function () {
            expect(rotatedVector.getX()).toBeCloseTo(-40.0, 1);
        });
        it("Y Set", function () {
            expect(rotatedVector.getY()).toBeCloseTo(30.0, 1);
        });
    });

    describe("Angle between", function () {
        var secondVector, angleBetween;
        secondVector = new Vector(-40, 30, 0);
        angleBetween = secondVector.angleBetween(vector);

        it("Result is PI/2", function () {
            expect(angleBetween).toBeCloseTo(Math.PI / 2, 1);
        });
    });
});

