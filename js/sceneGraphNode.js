/*global window, alert, document, Matrix*/

var SceneGraphNode = (function () {
    function SceneGraphNode(pTransMatrix) {
        this.setTransMatrix(pTransMatrix);
        this.mChildren = [];
    }

    SceneGraphNode.prototype.setTransMatrix = function (pTransMatrix) {
        this.mTransMatrix = pTransMatrix;
    };
    SceneGraphNode.prototype.getTransMatrix = function () {
        return this.mTransMatrix;
    };

    SceneGraphNode.prototype.addChild = function (pChild) {
        this.mChildren.push(pChild);
    };

    SceneGraphNode.prototype.getChildAt = function (pIndex) {
        return this.mChildren[pIndex];
    };

    SceneGraphNode.prototype.getNumberOfChildren = function () {
        return this.mChildren.length;
    };

    SceneGraphNode.prototype.draw = function (pContext, pMatrix) {
        var mTransformMatrix, i;

        mTransformMatrix = pMatrix.multiply(this.mTransMatrix);
        mTransformMatrix.setTransform(pContext);

        for (i = 0; i < this.mChildren.length; i = i + 1) {
            this.mChildren[i].draw(pContext, mTransformMatrix);
        }

        pMatrix.setTransform(pContext);
    };

    SceneGraphNode.prototype.update = function (pDeltaTime) {
        var i;

        for (i = 0; i < this.mChildren.length; i = i + 1) {
            this.mChildren[i].update(pDeltaTime);
        }
    };

    SceneGraphNode.prototype.initialise = function () {
        var i;

        for (i = 0; i < this.mChildren.length; i = i + 1) {
            this.mChildren[i].initialise();
        }
    };

    return SceneGraphNode;
}());