/*global window, Matrix, Vector, Land, River, SceneGraphNode*/

var Background = (function () {
    function Background() {
        this.mRootNode = new SceneGraphNode(Matrix.createIdentity());
    }

    Background.prototype.initialise = function () {
        var riverTransform, riverNode;

        riverTransform = Matrix.createTranslation(new Vector(-150, 0));
        riverNode = new SceneGraphNode(riverTransform);
        riverNode.addChild(new River());

        this.mRootNode = new SceneGraphNode(Matrix.createIdentity());
        this.mRootNode.addChild(new Land());
        this.mRootNode.addChild(riverNode);
    };

    Background.prototype.draw = function (pContext, pTransformMatrix) {
        pContext.fillStyle = "#4A9AFF";
        pContext.fillRect(-400, -600,
            800, 600);

        this.mRootNode.draw(pContext, pTransformMatrix);
    };

    Background.prototype.update = function () {

    };

    return Background;
}());