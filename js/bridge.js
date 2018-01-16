/*global window, Matrix, Vector, Pillar, Road, SceneGraphNode*/

var Bridge = (function () {
    function Bridge() {
        this.mRootNode = new SceneGraphNode(Matrix.createIdentity());
    }

    Bridge.prototype.initialise = function () {
        var leftPillarTransform, leftPillarNode, rightPillarTransform, rightPillarNode,
            roadTransform, roadNode;

        leftPillarTransform = Matrix.createTranslation(new Vector(-150, 0));
        leftPillarNode = new SceneGraphNode(leftPillarTransform);
        leftPillarNode.addChild(new Pillar());

        rightPillarTransform = Matrix.createTranslation(new Vector(150, 0));
        rightPillarNode = new SceneGraphNode(rightPillarTransform);
        rightPillarNode.addChild(new Pillar());

        roadTransform = Matrix.createTranslation(new Vector(0, 75));
        roadNode = new SceneGraphNode(roadTransform);
        roadNode.addChild(new Road());

        this.mRootNode.addChild(roadNode);
        this.mRootNode.addChild(leftPillarNode);
        this.mRootNode.addChild(rightPillarNode);
    };

    Bridge.prototype.draw = function (pContext, pTransformMatrix) {
        this.mRootNode.draw(pContext, pTransformMatrix);

        pContext.lineWidth = 5;

        pContext.beginPath();
        pContext.moveTo(-400, 75);
        pContext.bezierCurveTo(-400, 75,
            -150, 75,
            -150, -150);
        pContext.bezierCurveTo(-150, 75,
            150, 75,
            150, -150);
        pContext.bezierCurveTo(150, 75,
            400, 75,
            400, 75);
        pContext.stroke();
        pContext.closePath();
    };

    Bridge.prototype.update = function () {

    };

    return Bridge;
}());